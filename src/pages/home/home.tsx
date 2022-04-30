import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "../../others/components/Button";
import { Header } from "../../others/components/Header";
import { Spacer } from "../../others/components/Spacer";
import { Text } from "../../others/components/Text";
import { Content } from "../../others/components/Content";
import { useCountriesQuery } from "../../others/contexts/api";
import { isShareSupported, useShare } from "../../others/helpers/share";

import styles from "./home.module.css";

import { ImgNext } from "../../medias/images/UGT_Asset_UI_ButtonNext";
import { ImgShare } from "../../medias/images/UGT_Asset_UI_Share";
import { Action, ActionList } from "../../others/components/ActionList";
import { ImgInfo } from "../../medias/images/UGT_Asset_UI_Info";
import { Loader } from "../../others/components/Loader";
import { AvailableISO, FlagIcon, ISO2RFC } from "../../others/components/FlagIcon";
import ReactGA from "react-ga4";
import {useSylnishiContext} from "../../others/contexts/sylnishiContext";

export function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { share } = useShare();
  const { updateValue } = useSylnishiContext();
  const setDisplayAboutUsModal = (displayAboutUsModal: boolean) => updateValue({ displayAboutUsModal });

  const { data: countries } = useCountriesQuery();

  useEffect(() => {
    document.title = t("home_page_title");
    ReactGA.initialize(process.env.REACT_APP_GA4_ID as string);
    ReactGA.send("pageview");
  }, [t]);

  const actions: Action[] =
    countries?.map((country): Action => {
      return {
        title: t(country.name),
        leading: (
          <FlagIcon
            alt=""
            lang={ISO2RFC[country.id.toLowerCase() as AvailableISO]}
            className={styles.countryIcon}
          />
        ),
        trailing: <ImgNext fill="var(--color-secondary-dark)"></ImgNext>,
        onAction: () => navigate(`/${country.id.toLowerCase()}`),
      };
    }) ?? [];

  return (
    <React.Fragment>
      <Header hasHeadline hasLangSelector />
      <Content>
        {/* Welcome */}
        <div className={styles.welcome}>
          <h1>{t("home_welcome")}</h1>
          <Text>
            {t("home_welcome_text")}
            <b> — </b>
            <b>{t("home_welcome_text_bold")}</b>
          </Text>
        </div>

        <Spacer size={50} />

        {/* Country selection */}
        {countries != null ? (
          <ActionList title={t("home_where")} actions={actions} />
        ) : (
          <Loader></Loader>
        )}

        <Spacer size={50} />

        {/* Infos */}
        <div className={styles.infoRow}>
          <Button
            leadingIcon={<ImgInfo alt="" />}
            variant="white"
            onClick={() => {
              setDisplayAboutUsModal(true);
            }}
          >
            <span className={styles.noWrap}>{t("about")}</span>
          </Button>
          {isShareSupported() && (
            <Button
              trailingIcon={<ImgShare alt="" />}
              variant="white"
              onClick={() => {
                share();
              }}
            >
              <span className={styles.noWrap}>{t("share")}</span>
            </Button>
          )}
        </div>
      </Content>
    </React.Fragment>
  );
}
