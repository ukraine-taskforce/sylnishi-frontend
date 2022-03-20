import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";
import { LanguageSelector } from "./LanguageSelector";
import { Spacer } from "./Spacer";
import { Text } from "./Text";

import { ImgBack } from "../../medias/images/UGT_Asset_UI_Back";

import { AssetRect } from "../../medias/images/UGT_Asset_SVGRect";
import { AssetName } from "../../medias/images/UGT_Asset_Name";

export interface HeaderProps {
  backLink?: string;
  hasHeadline?: boolean;
  hasLangSelector?: boolean;
}

export interface HeaderCardProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export const Header: React.FunctionComponent<HeaderProps> = ({ backLink, hasHeadline, hasLangSelector }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navigator}>
        <AssetRect className={styles.colorAccent}></AssetRect>
        <div className={styles.elementsWrapper}>
          {Boolean(backLink) && (
            <div className={styles.headerItem} onClick={() => backLink && navigate(backLink)}>
              <ImgBack alt={t("back")} className={styles.backIcon} />
              {t("back")}
            </div>
          )}
          {Boolean(hasHeadline) && (
            <div>
              <AssetName className={styles.nameSVG}></AssetName>
              <Text className={styles.nameLink}>SYLNISHI.COM</Text>
            </div>
          )}
          <Spacer flex={1} />
          {hasLangSelector && <LanguageSelector />}
        </div>
      </nav>
    </div>
  );
};
