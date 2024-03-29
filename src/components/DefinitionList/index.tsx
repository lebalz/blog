import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';


interface Props {
  children?: React.ReactNode;
}

export default function DefinitionList(props: Props): JSX.Element {
  return (
    <dl className={clsx(styles.dl, 'dl')}>
      {props.children}
    </dl>
  );
}
