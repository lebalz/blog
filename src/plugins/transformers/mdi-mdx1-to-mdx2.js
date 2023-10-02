const fs = require('fs');
const path = require('path');

const fileDirectories = ['docs', 'recipes', 'blog'];

/**
 * @example
 * :mdi-account: --> :mdi[account]
 * :mdi-account--red: --> :mdi[account]{.red}
 */
const REGEX = /:mdi-(?<content>\b\w+\b)(--(?<clsx>\b\w+\b))?:/;

const getFilesRecursively = (directory) => {
    const files = []
    const filesInDirectory = fs.readdirSync(directory);
    for (const f of filesInDirectory) {
        const absolute = path.join(directory, f);
        if (fs.statSync(absolute).isDirectory()) {
            files.push(...getFilesRecursively(absolute));
        } else if (/\.mdx?/.test(f)) {
            files.push(absolute);
        }
    }
    return files;
};

const files = fileDirectories.reduce((acc, dir) => {
    return [...acc, ...getFilesRecursively(`./${dir}`)];
}, []);

/**
 * 
 * @param {string} file 
 */
async function ensurePageId(file) {
    if (!(file.endsWith('.md') || !file.endsWith('.mdx'))) {
        return;
    }
    try {
        /** @type string */
        let raw = await fs.promises.readFile(file, {encoding: 'utf8'});
        let match;
        let hasChanged = false;
        while (match = raw.match(REGEX)) {
            hasChanged = true;
            const {content, clsx} = match.groups;
            const mdi = clsx ? `:mdi[${content}]{.${clsx}}` : `:mdi[${content}]`;
            raw = `${raw.slice(0, match.index)}${mdi}${raw.slice(match.index + match[0].length)}`;
        }
        if (hasChanged) {
            console.log(`Writing ${file}`)
            await fs.promises.writeFile(file, raw, {encoding: 'utf8'});
        }
    } catch (err) {
        console.error(err);
        return;
    }
}

files.forEach(ensurePageId);