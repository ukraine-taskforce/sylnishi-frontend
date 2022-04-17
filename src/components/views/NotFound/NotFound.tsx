import { Spacer } from "@components/layout/Spacer/Spacer";
import { Text } from "@components/typography/Text/Text";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className={styles.notFoundWrapper}>
        <h1>404</h1>
        <Text alignment="left">{t("page_not_exist")}</Text>
        <Spacer />
        <Link to="/">{t("go_to_homepage")}</Link>
      </div>
    </React.Fragment>
  );
}
