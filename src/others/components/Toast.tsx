import styles from "./Toast.module.css";

export interface ToastProps {
  display: boolean;
}

export const Toast: React.FunctionComponent<ToastProps> = ({ display = false, children }) => {
  return <div className={`${styles.wrapper} ${display ? "" : styles.hidden}`}>{children}</div>;
};
