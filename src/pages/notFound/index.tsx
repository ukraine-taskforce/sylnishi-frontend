import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Spacer } from "../../others/components/Spacer";
import { Text } from "../../others/components/Text";
import { Header } from "../../others/components/Header";
import { Content } from "../../others/components/Content";
import { NotFound } from "../../others/components/NotFound";

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Header backLink="/" />
      <Content>
        <Spacer size={100} />
        <NotFound></NotFound>
      </Content>
    </React.Fragment>
  );
}
