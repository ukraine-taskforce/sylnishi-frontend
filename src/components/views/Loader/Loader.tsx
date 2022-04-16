import styles from "./Loader.module.css";

export interface LoaderProps {}

export const Loader: React.FunctionComponent<LoaderProps> = () => {
  return (
    <div className={styles.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
