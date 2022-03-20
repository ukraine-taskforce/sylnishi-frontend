import React from "react";
import styles from "./Button.module.css";
import { Spacer } from "./Spacer";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "normal" | "highlight" | "white";
  fullWidth?: boolean;
  centered?: boolean;
  focus?: boolean;
  floats?: boolean;
  leadingIcon?: React.ReactChild;
  trailingIcon?: React.ReactChild;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  fullWidth,
  focus,
  children,
  leadingIcon,
  trailingIcon,
  floats,
  className,
  variant = "normal",
  centered = false,
  ...props
}) => {
  const btnClasses =
    `${styles.button} ` +
    `${className ?? ""} ` +
    `${floats ? styles.buttonFloat : styles.buttonDefault} ` +
    `${variant !== "normal" ? styles[variant] : ""}`;

  return centered ? (
    <button className={btnClasses} style={{ width: fullWidth ? "100%" : "auto" }} {...props}>
      <span className={styles.label}>{children}</span>
      <div className={styles.iconsContainer}>
        {Boolean(leadingIcon) && <span className={styles.leadingIcon}>{leadingIcon}</span>}
        <Spacer flex={1}></Spacer>
        {Boolean(trailingIcon) && <span className={styles.trailingIcon}>{trailingIcon}</span>}
      </div>
    </button>
  ) : (
    <button className={btnClasses} style={{ width: fullWidth ? "100%" : "auto" }} {...props}>
      <div className={styles.flexContainer}>
        {Boolean(leadingIcon) && <span className={styles.leadingIcon}>{leadingIcon}</span>}
        <span className={styles.label}>{children}</span>
        <Spacer flex={1}></Spacer>
        {Boolean(trailingIcon) && <span className={styles.trailingIcon}>{trailingIcon}</span>}
      </div>
    </button>
  );
};
