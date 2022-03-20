import { useTranslation } from "react-i18next";

import { Card } from "./Card";
import styles from "./Modal.module.css";

import { ImgClose } from "../../medias/images/UGT_Asset_UI_Close";
import React from "react";

export interface ModalProps {
  handleClose: () => void;
  show: boolean;
}

export const Modal: React.FunctionComponent<ModalProps> = ({ handleClose, show, children }) => {
  const { t } = useTranslation();

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const modalOuter = (show ? styles.displayBlock : styles.displayNone) + " " + styles.modal;
  return (
    <div className={modalOuter} onClick={handleOutsideClick}>
      <section className={styles.modalInner}>
        <Card>
          {children}
          <button className={styles.closeButton} onClick={handleClose}>
            <ImgClose alt={t("close")} fill="var(--color-action)"/>
          </button>
        </Card>
      </section>
    </div>
  );
};
