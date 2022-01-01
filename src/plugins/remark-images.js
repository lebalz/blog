const visit = require('unist-util-visit');
const path = require('path');
const fs = require('fs-extra');
const url = require('url');
const escapeHtml = require('escape-html');
const posixPath = require('@docusaurus/utils').posixPath;
const escapePath = require('@docusaurus/utils').escapePath;
const toMessageRelativeFilePath = require('@docusaurus/utils').toMessageRelativeFilePath;
const { parseOptions, cleanedText } = require('./helpers');
const getFileLoaderUtils = require('@docusaurus/utils').getFileLoaderUtils;

/**
 * Supported config annotations:
 * @option --size
 * @option --width
 * @option --height
 */


const getOptions = (alt) => {
  const altText = cleanedText(alt);
  const options = parseOptions(alt, true);
  return {
    alt: alt,
    caption: altText || '',
    options: options
  }
}

const {
  loaders: { inlineMarkdownImageFileLoader },
} = getFileLoaderUtils();

/**
 * 
 * @param {Image} node 
 * @param {isInline} boolean
 * @param {string} pathUrl 
 */
const createJSX = (node, isInline, pathUrl) => {
  const jsxNode = node;
  jsxNode.type = 'jsx';
  const { alt, caption, options } = jsxNode.alt ? getOptions(jsxNode.alt) : { alt: undefined, options: {} };

  jsxNode.value = `<Image
    caption="${caption}"
    options={${JSON.stringify(options)}}
    isInline={${isInline}}
    src={
      ${node.url
      ? `require("${inlineMarkdownImageFileLoader}${escapePath(
        pathUrl,
      )}").default`
      : ''
    }}
    ${alt ? ` alt="${escapeHtml(alt)}"` : ''}
    ${node.title ? ` title="${escapeHtml(node.title)}"` : ''}
    />`;

  if (jsxNode.url) {
    delete jsxNode.url;
  }
  if (jsxNode.alt) {
    delete jsxNode.alt;
  }
  if (jsxNode.title) {
    delete jsxNode.title;
  }
};

/**
 * 
 * @param {string} imagePath 
 * @param {string} sourceFilePath 
 */
async function ensureImageFileExist(imagePath, sourceFilePath) {
  const imageExists = await fs.pathExists(imagePath);
  if (!imageExists) {
    throw new Error(
      `Image ${toMessageRelativeFilePath(
        imagePath,
      )} used in ${toMessageRelativeFilePath(sourceFilePath)} not found.`,
    );
  }
}

/**
 * 
 * @param {string[]} possiblePaths 
 * @param {string} sourceFilePath 
 * @returns string
 */
async function findImage(possiblePaths, sourceFilePath) {
  // eslint-disable-next-line no-restricted-syntax
  for (const possiblePath of possiblePaths) {
    if (await fs.pathExists(possiblePath)) {
      return possiblePath;
    }
  }
  throw new Error(
    `Image ${possiblePaths
      .map((p) => toMessageRelativeFilePath(p))
      .join(' or ')} used in ${toMessageRelativeFilePath(
        sourceFilePath,
      )} not found.`,
  );
}

async function getImgUrl(node, staticDirs, filePath) {
  if (path.isAbsolute(node.url)) {
    // absolute paths are expected to exist in the static folder

    const possibleImagePaths = staticDirs.map((dir) =>
      path.join(dir, node.url),
    );
    const imagePath = await findImage(possibleImagePaths, filePath);
    return posixPath(imagePath);
  }
  // We try to convert image urls without protocol to images with require calls
  // going through webpack ensures that image assets exist at build time
  // relative paths are resolved against the source file's folder
  const expectedImagePath = path.join(path.dirname(filePath), node.url);
  await ensureImageFileExist(expectedImagePath, filePath);
  return node.url.startsWith('./') ? node.url : `./${node.url}`;
}

/**
 * 
 * @param {Image} node 
 * @param {isInline} boolean
 * @param {PluginOptions} param1
 */
 async function processImageNode(
  node,
  isInline,
  { filePath, staticDirs },
) {
  if (!node.url) {
    throw new Error(
      `Markdown image URL is mandatory in "${toMessageRelativeFilePath(
        filePath,
      )}" file`,
    );
  }

  const parsedUrl = url.parse(node.url);
  if (parsedUrl.protocol) {
    // pathname:// is an escape hatch,
    // in case user does not want his images to be converted to require calls going through webpack loader
    // we don't have to document this for now,
    // it's mostly to make next release less risky (2.0.0-alpha.59)
    if (parsedUrl.protocol === 'pathname:') {
      node.url = node.url.replace('pathname://', '');
    }
  }
  else {
    const imagePath = await getImgUrl(node, staticDirs, filePath);
    createJSX(node, isInline, posixPath(imagePath), filePath);
  }
}


const defaultUnit = (value, unit = "px") => {
  // when only a number is given, add the default unit
  if (/^\d+(\.\d*)?$/.test(value)) {
    return `${value}${unit}`;
  }
  return value;
};

/**
 * 
 * @param {Image} node 
 * @param {React.Node[]} gallery
 * @param {PluginOptions} param1
 */
 async function processGalleryNode(
  node,
  gallery,
  { filePath, staticDirs },
) {
  const urlImages = [];
  const captions = [];
  let opts = {};
  gallery.forEach((g) => {
    const { caption, options } = g.alt ? getOptions(g.alt) : { alt: undefined, options: {} };
    opts = {...options, ...opts};
    urlImages.push(getImgUrl(g, staticDirs, filePath))
    captions.push(caption);
  });
  const urls = await Promise.all(urlImages);
  const imgs = urls.map((src, idx) => {
    return `{
      original: require("${inlineMarkdownImageFileLoader}${escapePath(src)}").default,
      thumbnail: require("${inlineMarkdownImageFileLoader}${escapePath(src)}").default,
      description: "${captions[idx]}"
    }`
  });

  const jsxNode = node;
  jsxNode.type = 'jsx';
  let style = {};
  if (opts.noMargins) {
    delete opts.noMargins;
  }
  if (opts.size) {
    style.maxWidth = `min(90vw, ${defaultUnit(opts.size)})`;
    style.maxHeight = defaultUnit(opts.size);
    delete opts.size;
  }
  if (opts.height) {
    style.maxHeight = defaultUnit(opts.height);
    style.height = defaultUnit(opts.height);
    delete opts.height;
  }
  if (opts.width) {
    style.maxWidth = `min(90vw, ${defaultUnit(opts.width)})`;
    style.width = defaultUnit(opts.width);
    delete opts.width;
  }
  style = {...style, ...opts};


  jsxNode.value = `<div style={${JSON.stringify(style)}}><ImageGallery
    items={[${imgs.join(',')}]}
    infinite
    lazyLoad
    showThumbnails={true}
    showPlayButton={false}
    showBullets={false}
    showNav={false}
    slideDuration={400}
    slideInterval={8000}
    autoPlay
/></div>`;

  if (jsxNode.url) {
    delete jsxNode.url;
  }
  if (jsxNode.alt) {
    delete jsxNode.alt;
  }
  if (jsxNode.title) {
    delete jsxNode.title;
  }
}

/**
 * 
 * @param {React.Node[]} children 
 */
const imageGallery = (children) => {
  let isGallery = true;
  const images = [];
  children.forEach((c) => {
    if (!isGallery) {
      return;
    }
    switch (c.type) {
      case 'image':
        images.push(c);
        break;
      case 'text':
        // when value is not white-space only, it's not treated as a gallery.
        isGallery = c.value.match(/^\s*$/);
        break;
      default:
        isGallery = false;
    }
    if (c.type !== 'image') {
      return;
    }
  });
  if (isGallery && images.length > 1) {
    return images;
  }
}

const plugin = (options) => {
  const transformer = async (root, file) => {
    const staticDir = `${file.cwd}/static`;
    const filePath = file.history[0];
    const promises = [];
    let hasGallery = false;
    visit(
      root,
      (node) => {
        // select all parent nodes containing an image children...
        if (node.children && node.children.some(c => c.type === 'image')) {
          return true;
        }
        return false;
      },
      (node) => {
        if (!node.children) {
          return;
        }
        const isInline = node.children.length > 1;
        const gallery = isInline ? imageGallery(node.children) : undefined;
        // paragraphs with only one image shall be div's
        if (!isInline && node.type === 'paragraph') {
          node.type = 'div';
          if (!node.data) {
            node.data = {}
          }
          if (!node.data.hProperties) {
            node.data.hProperties = {}
          }
          if (!node.data.hProperties.style) {
            node.data.hProperties.style = {}
          }
          node.data.hProperties.style = { ...node.data.hProperties.style, display: 'flex', justifyContent: 'center' };
        }
        if (gallery) {
          promises.push(processGalleryNode(node, gallery, {filePath: filePath, staticDirs: [staticDir]}));
          hasGallery = true;
        } else {
          node.children.forEach((c) => {
            if (c.type !== 'image') {
              return;
            }
            promises.push(processImageNode(c, isInline, { filePath: filePath, staticDirs: [staticDir] }));
          })
        }
      }
    );
    if (promises.length > 0) {
      visit(root, 'root', (node) => {
        node.children.unshift(
          {
            type: 'import',
            value: "import Image from '@site/src/components/Image';"
          }
        )
      });
    }
    if (hasGallery) {
      visit(root, 'root', (node) => {
        node.children.unshift(
          {
            type: 'import',
            value: "import ImageGallery from 'react-image-gallery';"
          }
        )
      });
    }
    await Promise.all(promises);
  };
  return transformer;
};

module.exports = plugin;