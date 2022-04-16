import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "../../../components/layout/Header/Header";
import { Content } from "../../../components/layout/Content/Content";
import { useCountriesQuery } from "../../../contexts/api";
import { Loader } from "../../../components/views/Loader/Loader";
import { NotFound } from "../../../components/views/NotFound/NotFound";
import { CountryDetail } from "../../../components/views/CountryDetail/CountryDetail";
import ReactGA from "react-ga4";

interface CountryDetailProps {}

export const CountryDetailPage: React.FunctionComponent<CountryDetailProps> = () => {
  const { t } = useTranslation();
  const params = useParams();
  const id = params.id;

  const { data: countries, isFetching } = useCountriesQuery();
  const country = countries?.find((c) => c.id.toLocaleLowerCase() === id);

  useEffect(() => {
    document.title = `${t("home_page_title")}: ${t(country?.name + "")}`;
    ReactGA.initialize(process.env.REACT_APP_GA4_ID as string);
    ReactGA.send("pageview");
  }, [country, t]);

  return (
    <React.Fragment>
      <Header backLink="/" />
      <Content>
        {country != null ? (
          <CountryDetail country={country} />
        ) : isFetching ? (
          <Loader></Loader>
        ) : (
          <NotFound></NotFound>
        )}
      </Content>
    </React.Fragment>
  );
};
