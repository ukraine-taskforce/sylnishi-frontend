import React from "react";
import { useTranslation } from "react-i18next";
import { Spacer } from "../../others/components/Spacer";
import { Header } from "../../others/components/Header";
import { Content } from "../../others/components/Content";
import { Action, ActionList } from "../../others/components/ActionList";
import { ImgNext } from "../../medias/images/UGT_Asset_UI_ButtonNext";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Service, useCountriesQuery } from "../../others/contexts/api";
import { ImgFlagUk } from "../../medias/images/UGT_Asset_FlagSelector_UKR";
import { ImgSupply } from "../../medias/images/UGT_Asset_UI_Supply";
import { ImgSpeech } from "../../medias/images/UGT_Asset_UI_Speech";
import { ImgMessenger } from "../../medias/images/UGT_Asset_UI_Messenger";
import { ImgExternalLink } from "../../medias/images/UGT_Asset_UI_ExternalLink";
import { Loader } from "../../others/components/Loader";

import styles from "./countryDetail.module.css";

interface CountryDetailProps {
  id: string;
}

const FLAG_MAP = {
  ua: <ImgFlagUk alt=""></ImgFlagUk>,
  pl: <ImgFlagUk alt=""></ImgFlagUk>,
  cz: <ImgFlagUk alt=""></ImgFlagUk>,
  de: <ImgFlagUk alt=""></ImgFlagUk>,
};

function serviceToAction(service: Service, navigate: NavigateFunction): Action {
  const redirect = service.path.startsWith("http") ? () => window.location.replace(service.path) : () => navigate(service.path);
  switch (service.type) {
    case "supplies":
      return {
        title: service.name,
        leading: <ImgSupply fill="var(--color-secondary-dark)"></ImgSupply>,
        trailing: <ImgNext fill="var(--color-secondary-dark)"></ImgNext>,
        onAction: redirect,
      };
    case "chat":
      return {
        title: service.name,
        leading: <ImgSpeech fill="var(--color-secondary-dark)"></ImgSpeech>,
        trailing: <ImgMessenger fill="var(--color-secondary-dark)"></ImgMessenger>,
        onAction: redirect,
      };
    case "external":
    default:
      return {
        title: service.name,
        trailing: <ImgExternalLink fill="var(--color-secondary-dark)"></ImgExternalLink>,
        onAction: redirect,
      };
  }
}

export const CountryDetail: React.FunctionComponent<CountryDetailProps> = ({ id }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: countries } = useCountriesQuery();

  const country = countries?.find((c) => c.id === id);

  const inhouseActions: Action[] =
    country?.info.services.inhouse.map((service): Action => {
      return serviceToAction(service, navigate);
    }) ?? [];

  const externalActions: Action[] =
    country?.info.services.external.map((service): Action => {
      return serviceToAction(service, navigate);
    }) ?? [];

  return (
    <React.Fragment>
      <Header backLink="/" />
      <Content>
        {country != null ? (
          <React.Fragment>
            <Spacer size={30} />
            <h1 className={styles.headline}>{country.name}</h1>
            <Spacer size={30} />
            {inhouseActions && <ActionList title={t("country_detail_our_services")} actions={inhouseActions} />}
            <Spacer size={30} />
            {externalActions && <ActionList title={t("country_detail_trusted_services")} actions={externalActions} />}
          </React.Fragment>
        ) : (
          <Loader></Loader>
        )}
      </Content>
    </React.Fragment>
  );
};
