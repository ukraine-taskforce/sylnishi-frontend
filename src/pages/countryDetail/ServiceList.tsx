import React from 'react';
import { t } from 'i18next';
import { Service } from '../../others/contexts/service';
import { useNavigate } from 'react-router-dom';
import { ImgSupply } from '../../medias/images/UGT_Asset_UI_Supply';
import { ImgSpeech } from '../../medias/images/UGT_Asset_UI_Speech';
import { ImgNext } from '../../medias/images/UGT_Asset_UI_ButtonNext';
import { ImgMessenger } from '../../medias/images/UGT_Asset_UI_Messenger';
import { ImgExternalLink } from '../../medias/images/UGT_Asset_UI_ExternalLink';
import { Action, ActionList } from '../../others/components/ActionList';

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
