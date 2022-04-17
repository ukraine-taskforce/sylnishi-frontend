import { Action, ActionList } from '@components/views/ActionList/ActionList';
import { ImgNext } from '@medias/images/UGT_Asset_UI_ButtonNext';
import { ImgExternalLink } from '@medias/images/UGT_Asset_UI_ExternalLink';
import { ImgMessenger } from '@medias/images/UGT_Asset_UI_Messenger';
import { ImgSpeech } from '@medias/images/UGT_Asset_UI_Speech';
import { ImgSupply } from '@medias/images/UGT_Asset_UI_Supply';
import { Service } from '@models/service';
import { t } from 'i18next';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface ServiceListProps {
  title: string;
  services: Service[];
}

export const ServiceList: React.FunctionComponent<ServiceListProps> = ({ title, services }) => {
  const navigate = useNavigate();

  const openService = (service: Service) =>
    service.path.startsWith('http')
      ? window.open(service.path, '_blank')?.focus()
      : navigate(service.path);

  const actions: Action[] = services.map((service: Service) => ({
    title: t(service.category),
    onAction: () => openService(service),
    trailing: <TrailingIcon service={service} />,
    leading: <LeadingIcon service={service} />,
  }));

  return <ActionList title={title} actions={actions} />;
};

function LeadingIcon({ service }: { service: Service }) {
  switch (service.category) {
    case 'Request supplies':
      return <ImgSupply fill="var(--color-secondary-dark)"></ImgSupply>;
    case 'Chat':
      return <ImgSpeech fill="var(--color-secondary-dark)"></ImgSpeech>;
    default:
      return null;
  }
}

function TrailingIcon({ service }: { service: Service }) {
  switch (service.category) {
    case 'Request supplies':
      return <ImgNext fill="var(--color-secondary-dark)"></ImgNext>;
    case 'Chat':
      return <ImgMessenger fill="var(--color-secondary-dark)"></ImgMessenger>;
    default:
      return <ImgExternalLink fill="var(--color-secondary-dark)"></ImgExternalLink>;
  }
}
