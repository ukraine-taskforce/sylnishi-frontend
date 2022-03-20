import React from "react";
import styles from "./NumberInput.module.css";

import { ImgQuantityMinus } from "../../medias/images/UGT_Asset_UI_Quantities_Minus";
import { ImgQuantityPlus } from "../../medias/images/UGT_Asset_UI_Quantities_Plus";

export interface NumberInputProps {
  value: number;
  label: string;
  minVal?: number;
  maxVal?: number;
  onChange: (value: number) => void;
}

export const NumberInput: React.FunctionComponent<NumberInputProps> = ({ value, label, minVal = 0, maxVal = 10, onChange }) => {
  const handleChange = React.useCallback(
    (event) => {
      if (!Number.isInteger(Number(event.target.value))) {
        return;
      }

      onChange(Math.min(maxVal, Math.max(minVal, parseInt(event.target.value) || 0)));
    },
    [onChange, maxVal, minVal]
  );
  return (
    <span className={styles.wrapper}>
      <ImgQuantityMinus
        className={styles.button}
        onClick={() => {
          if (value <= minVal) return;
          onChange(value - 1);
        }}
        style={{ opacity: value <= minVal ? 0.5 : 1 }}
        alt="-"
      />
      <input
        className={styles.input}
        type="number"
        value={value}
        min={minVal}
        max={maxVal}
        inputMode="numeric"
        placeholder="0"
        aria-label={label}
        onChange={handleChange}
      />
      <ImgQuantityPlus
        className={styles.button}
        onClick={() => {
          if (value >= maxVal) return;
          onChange(value + 1);
        }}
        style={{ opacity: value >= maxVal ? 0.5 : 1 }}
        alt="+"
      />
    </span>
  );
};
