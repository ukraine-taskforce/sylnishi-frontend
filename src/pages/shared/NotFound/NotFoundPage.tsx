import React from "react";
import { Spacer } from "../../../components/layout/Spacer/Spacer";
import { Header } from "../../../components/layout/Header/Header";
import { Content } from "../../../components/layout/Content/Content";
import { NotFound } from "../../../components/views/NotFound/NotFound";

export function NotFoundPage() {
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
