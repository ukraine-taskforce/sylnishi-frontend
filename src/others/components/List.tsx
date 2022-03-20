import styles from "./List.module.css";

export interface ListProps {
  ordered?: boolean;
}

export const List: React.FunctionComponent<ListProps> = ({ ordered = true, children }) => {
  if (ordered) {
    return <ol className={styles.list}>{children}</ol>;
  } else {
    return <ul className={styles.list}>{children}</ul>;
  }
};
