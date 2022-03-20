import React from "react";
import styles from "./Content.module.css";

export interface ContentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Content: React.FunctionComponent<ContentProps> = ({children}) => {
  return <div className={styles.bodyWrapper}>{children}</div>;
};
