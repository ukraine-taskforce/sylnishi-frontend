import React from "react";
import styles from "./Input.module.css";

import { ImgClose } from "../../medias/images/UGT_Asset_UI_Close";

export interface InputProps {
  icon?: React.ReactChild;
  value: string;
  label: string;
  placeholder: string;
  autoFocus?: boolean;
  onChange: (value: string) => void;
}

export const Input: React.FunctionComponent<InputProps> = ({ icon, value, placeholder, autoFocus, label, onChange }) => {
  return (
    <div className={styles.wrapper}>
      {Boolean(icon) && <span className={styles.icon}>{icon}</span>}
      <input
        className={styles.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
        autoFocus={autoFocus ?? false}
      />
      {value.length > 0 && <ImgClose className={styles.clear} onClick={() => onChange("")} alt="clear value" />}
    </div>
  );
};
