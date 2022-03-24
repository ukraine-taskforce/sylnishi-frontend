import React from "react";
import { useTranslation } from "react-i18next";
import { Spacer } from "../../others/components/Spacer";
import { Header } from "../../others/components/Header";
import { Content } from "../../others/components/Content";
import { Action, ActionList } from "../../others/components/ActionList";
import { ImgNext } from "../../medias/images/UGT_Asset_UI_ButtonNext";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Service, useCountriesQuery } from "../../others/contexts/api";
// import { ImgFlagUk } from "../../medias/images/UGT_Asset_FlagSelector_UKR";
import { ImgSupply } from "../../medias/images/UGT_Asset_UI_Supply";
import { ImgSpeech } from "../../medias/images/UGT_Asset_UI_Speech";
import { ImgMessenger } from "../../medias/images/UGT_Asset_UI_Messenger";
import { ImgExternalLink } from "../../medias/images/UGT_Asset_UI_ExternalLink";
import { Loader } from "../../others/components/Loader";

import styles from "./countryDetail.module.css";

interface CountryDetailProps {
  id: string;
}

// TODO add flag component for all needed countries
// const FLAG_MAP = {
//   ua: <ImgFlagUk alt=""></ImgFlagUk>,
//   pl: <ImgFlagUk alt=""></ImgFlagUk>,
//   cz: <ImgFlagUk alt=""></ImgFlagUk>,
//   de: <ImgFlagUk alt=""></ImgFlagUk>,
// };

function serviceToAction(service: Service, navigate: NavigateFunction): Action {
  const redirect = service.path.startsWith("http")
    ? () => window.location.replace(service.path)
    : () => navigate(service.path);
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

  const getInhouseActions = React.useCallback(
    () => country?.info.services.inhouse.map((service) => serviceToAction(service, navigate)) ?? [],
    [country, navigate]
  );

  const getExternalActions = React.useCallback(
    () =>
      country?.info.services.external.map((service) => serviceToAction(service, navigate)) ?? [],
    [country, navigate]
  );

  return (
    <React.Fragment>
      <Header backLink="/" />
      <Content>
        {country != null ? (
          <React.Fragment>
            <Spacer size={30} />
            <h1 className={styles.headline}>{country.name}</h1>
            <Spacer size={30} />
            {getInhouseActions && (
              <ActionList title={t("country_detail_our_services")} actions={getInhouseActions()} />
            )}
            <Spacer size={30} />
            {getExternalActions && (
              <ActionList title={t("country_detail_trusted_services")} actions={getExternalActions()} />
            )}
          </React.Fragment>
        ) : (
          <Loader></Loader>
        )}
      </Content>
    </React.Fragment>
  );
};
