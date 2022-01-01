import React from "react";
import styles from "./Image.module.scss";
import clsx from "clsx";

interface Bib {
  author?: string;
  source?: string;
  licence?: string;
  licence_url?: string;
  edited?: boolean;
}

interface Options extends Partial<React.CSSProperties> {
  size?: string;
  width?: string;
  height?: string;
  noMargins?: boolean;
}

interface FigProps {
  src: string;
  caption?: string;
  alt?: string;
}

interface Props extends FigProps {
  bib?: Bib;
  options: Options;
  isInline: boolean;
}

const isOver = (bbox: DOMRect, x: number, y: number) => {
  const lr = bbox.left <= x && bbox.right >= x;
  const tb = bbox.top <= y && bbox.bottom >= y;
  return lr && tb;
};

const defaultUnit = (value: string, unit: string = "px") => {
  // when only a number is given, add the default unit
  if (/^\d+(\.\d*)?$/.test(value)) {
    return `${value}${unit}`;
  }
  return value;
};

const ResizedImage = (props: Props) => {
  let style: React.CSSProperties = {};
  const opts = {...props.options};
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

  return (
    <img
      src={props.src}
      alt={props.alt}
      style={style}
      title={
        props.isInline && props.bib
          ? `Author: ${props.bib.author} @ ${props.bib.licence}${
              props.bib.edited ? ", Bearbeitet" : ""
            }`
          : undefined
      }
    />
  );
};

const Image = (props: Props) => {
  if (props.isInline) {
    return <ResizedImage {...props} />;
  }
  const [showControls, setShowControls] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const hasCaption = props.caption && props.caption !== "undefined";
  const hasFigCaption = props.bib || hasCaption;
  let noMargin = false;
  if (props.options.noMargins) {
    noMargin = true;
  }
  return (
    <figure
      className={clsx(styles.container, props.options.noMargins && styles.noMargins)}
      onMouseEnter={() => setShowControls(true)}
      onMouseOut={(e) => {
        if (
          !isOver(e.currentTarget.getBoundingClientRect(), e.clientX, e.clientY)
        ) {
          setShowControls(false);
        }
      }}
    >
      <ResizedImage {...props} />
      {hasFigCaption && (
        <figcaption>
          {hasCaption && (
            <span>{props.caption}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default Image;
