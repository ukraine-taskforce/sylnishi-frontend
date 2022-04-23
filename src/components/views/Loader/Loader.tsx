import React from 'react';
import styles from './Loader.module.css';

export interface LoaderProps {}

export const Loader: React.FunctionComponent<LoaderProps> = () => (
  <div className={styles.ldsEllipsis}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
