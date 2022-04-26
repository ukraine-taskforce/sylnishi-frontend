import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "../../others/components/Button";
import { Header } from "../../others/components/Header";
import { Modal } from "../../others/components/Modal";
import { Spacer } from "../../others/components/Spacer";
import { Text } from "../../others/components/Text";
import { Content } from "../../others/components/Content";
import { useCountriesQuery } from "../../others/contexts/api";
import { isShareSupported, useShare } from "../../others/helpers/share";

import styles from "./home.module.css";

import { ImgBrand } from "../../medias/images/UGT_Asset_Brand";
import { ImgNext } from "../../medias/images/UGT_Asset_UI_ButtonNext";
import { ImgShare } from "../../medias/images/UGT_Asset_UI_Share";
import { Action, ActionList } from "../../others/components/ActionList";
import { ImgInfo } from "../../medias/images/UGT_Asset_UI_Info";
import { Loader } from "../../others/components/Loader";
import { AvailableISO, FlagIcon, ISO2RFC } from "../../others/components/FlagIcon";
import ReactGA from "react-ga4";

export function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { share } = useShare();
  const [displayModal, setDisplayModal] = React.useState(false);

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
              setDisplayModal(true);
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

        {/* About modal */}
        <Modal show={displayModal} handleClose={() => setDisplayModal(false)}>
          <Spacer size={50} />
          <div style={{ display: "flex" }}>
            <Spacer flex={1} />
            <ImgBrand className={styles.ugtLogo} alt="UGT Logo" />
            <Spacer flex={1} />
          </div>
          <Spacer size={20} />
          <h1 style={{ textAlign: "center" }}>{t("about_dialog_head")}</h1>
          <Spacer size={22} />
          <Text alignment="center">{t("about_dialog_detailed")}</Text>
          <Spacer size={22} />
          {isShareSupported() && (
            <Button
              fullWidth
              centered
              variant="highlight"
              onClick={() => {
                share();
              }}
              trailingIcon={
                <ImgShare style={{ height: "15px" }} fill="var(--color-white)" alt={t("share")} />
              }
            >
              {t("share")}
            </Button>
          )}

          <Button
            fullWidth
            centered
            variant="white"
            onClick={(e) => {
              const w = window.open('','_blank');
              if(!w) return;
              w.location.href = "mailto:ugt@ukraineglobaltaskforce.com";
              w.focus();
              e.preventDefault();
            }}
          >
            <span className={styles.noWrap}>{t('contact_us')}</span>
          </Button>
        </Modal>
      </Content>
    </React.Fragment>
  );
}
