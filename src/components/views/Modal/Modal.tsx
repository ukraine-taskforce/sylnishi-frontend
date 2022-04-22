import { Card } from '@components/views/Card/Card';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImgClose } from '../../../medias/images/UGT_Asset_UI_Close';
import styles from './Modal.module.css';

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

  const modalOuter = `${show ? styles.displayBlock : styles.displayNone} ${styles.modal}`;
  return (
    <div role="none" className={modalOuter} onClick={handleOutsideClick}>
      <section className={styles.modalInner}>
        <Card>
          {children}
          <button type="button" className={styles.closeButton} onClick={handleClose}>
            <ImgClose alt={t('close')} fill="var(--color-action)" />
          </button>
        </Card>
      </section>
    </div>
  );
};
