import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export const Card: React.FunctionComponent<CardProps> = ({ children, className, ...props }) => (
  <div {...props} className={`${className ?? ''} ${styles.wrapper}`}>
    {children}
  </div>
);
