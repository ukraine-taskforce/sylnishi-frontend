import React from "react";
import { Spacer } from "../../others/components/Spacer";
import { Header } from "../../others/components/Header";
import { Content } from "../../others/components/Content";
import { NotFound } from "../../others/components/NotFound";

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
