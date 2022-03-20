import styles from "./Card.module.css";

export interface CardProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export const Card: React.FunctionComponent<CardProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`${className ?? ""} ${styles.wrapper}`}>
      {children}
    </div>
  );
};
