import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Spacer } from "../../others/components/Spacer";
import { Header } from "../../others/components/Header";
import { Content } from "../../others/components/Content";
import { Action, ActionList } from "../../others/components/ActionList";
import { ImgNext } from "../../medias/images/UGT_Asset_UI_ButtonNext";
import { useNavigate } from "react-router-dom";
import { Service, useCountriesQuery } from "../../others/contexts/api";
// import { ImgFlagUk } from "../../medias/images/UGT_Asset_FlagSelector_UKR";
import { ImgSupply } from "../../medias/images/UGT_Asset_UI_Supply";
import { ImgSpeech } from "../../medias/images/UGT_Asset_UI_Speech";
import { ImgMessenger } from "../../medias/images/UGT_Asset_UI_Messenger";
import { ImgExternalLink } from "../../medias/images/UGT_Asset_UI_ExternalLink";
import { Loader } from "../../others/components/Loader";

import styles from "./countryDetail.module.css";
import { useTrackingValue } from "../../others/contexts/tracking";
import { AvailableISO, FlagIcon, ISO2RFC } from "../../others/components/FlagIcon";
import { NotFound } from "../../others/components/NotFound";

interface CountryDetailProps {}

export const CountryDetail: React.FunctionComponent<CountryDetailProps> = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const { data: countries, isFetching } = useCountriesQuery();

  const country = countries?.find((c) => c.id === id);

  const { submit: submitTracking } = useTrackingValue();

  const servicesToActions = React.useCallback(
    (services: Service[]): Action[] => {
      return services.map((service) => {
        const redirect = service.path.startsWith("http")
          ? () => window.open(service.path, "_blank")?.focus()
          : () => navigate(service.path);

        const onAction = () => {
          submitTracking({ service: service.id, lang: i18n.language });
          redirect();
        };
        switch (service.type) {
          case "supplies":
            return {
              title: service.name,
              leading: <ImgSupply fill="var(--color-secondary-dark)"></ImgSupply>,
              trailing: <ImgNext fill="var(--color-secondary-dark)"></ImgNext>,
              onAction: onAction,
            };
          case "chat":
            return {
              title: service.name,
              leading: <ImgSpeech fill="var(--color-secondary-dark)"></ImgSpeech>,
              trailing: <ImgMessenger fill="var(--color-secondary-dark)"></ImgMessenger>,
              onAction: onAction,
            };
          case "external":
          default:
            return {
              title: service.name,
              trailing: <ImgExternalLink fill="var(--color-secondary-dark)"></ImgExternalLink>,
              onAction: onAction,
            };
        }
      });
    },
    [navigate, i18n.language, submitTracking]
  );

  const inhouse = country?.info?.services?.inhouse;
  const external = country?.info?.services?.external;

  return (
    <React.Fragment>
      <Header backLink="/" />
      <Content>
        {country != null ? (
          <React.Fragment>
            <Spacer size={30} />
            <div className={styles.countryWrapper}>
              <FlagIcon
                alt=""
                lang={ISO2RFC[country.id as AvailableISO]}
                className={styles.countryIcon}
              ></FlagIcon>
              <h1 className={styles.headline}>{country.name}</h1>
            </div>
            <Spacer size={30} />
            {inhouse && (
              <ActionList
                title={t("country_detail_our_services")}
                actions={servicesToActions(inhouse)}
              />
            )}
            <Spacer size={30} />
            {external && (
              <ActionList
                title={t("country_detail_trusted_services")}
                actions={servicesToActions(external)}
              />
            )}
          </React.Fragment>
        ) : isFetching ? (
          <Loader></Loader>
        ) : (
          <NotFound></NotFound>
        )}
      </Content>
    </React.Fragment>
  );
};
