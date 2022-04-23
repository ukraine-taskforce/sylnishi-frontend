import { Content } from '@components/layout/Content/Content';
import { Header } from '@components/layout/Header/Header';
import { Spacer } from '@components/layout/Spacer/Spacer';
import { NotFound } from '@components/views/NotFound/NotFound';
import React from 'react';

export interface NotFoundPageProps {}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => (
  <>
    <Header backLink="/" />
    <Content>
      <Spacer size={100} />
      <NotFound />
    </Content>
  </>
);
