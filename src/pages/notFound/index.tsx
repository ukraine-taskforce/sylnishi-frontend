import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Spacer } from "../../others/components/Spacer";
import { Text } from "../../others/components/Text";
import { Header } from "../../others/components/Header";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Header backLink="/" />
      <Spacer size={100} />
      <h1>404</h1>
      <Spacer size={24} />
      <Text>{t("page_not_exist")}</Text>
      <Spacer />
      <Link to="/">{t("go_to_homepage")}</Link>
    </React.Fragment>
  );
}
