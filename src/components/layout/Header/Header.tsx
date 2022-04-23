import { LanguageSelector } from '@components/controls/LanguageSelector/LanguageSelector';
import { Spacer } from '@components/layout/Spacer/Spacer';
import { AssetName } from '@medias/images/UGT_Asset_Name';
import { AssetRect } from '@medias/images/UGT_Asset_SVGRect';
import { ImgBack } from '@medias/images/UGT_Asset_UI_Back';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export interface HeaderProps {
  backLink?: string;
  hasHeadline?: boolean;
  hasLangSelector?: boolean;
}

export interface HeaderCardProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export const Header: React.FunctionComponent<HeaderProps> = ({
  backLink,
  hasHeadline,
  hasLangSelector,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <header className={styles.navWrapper}>
      <div className={styles.headerBackground}>
        <AssetRect className={styles.colorAccent} />
        <div className={styles.elementsWrapper}>
          {Boolean(backLink) && (
            <div
              role="button"
              tabIndex={0}
              className={styles.headerItem}
              onClick={() => backLink && navigate(backLink)}
            >
              <ImgBack alt={t('back')} className={styles.backIcon} />
              {t('back')}
            </div>
          )}
          {Boolean(hasHeadline) && (
            <div>
              <AssetName className={styles.nameSVG} />
            </div>
          )}
          <Spacer flex={1} />
          {hasLangSelector && <LanguageSelector />}
        </div>
      </div>
    </header>
  );
};
