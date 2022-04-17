import { Content } from "@components/layout/Content/Content";
import { Header } from "@components/layout/Header/Header";
import { Spacer } from "@components/layout/Spacer/Spacer";
import { NotFound } from "@components/views/NotFound/NotFound";
import React from "react";

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
