import { t } from 'i18next';
import React from 'react';
import { AvailableISO, FlagIcon, ISO2RFC } from '../../others/components/FlagIcon';
import { ServiceList } from '../../others/components/ServiceList';
import { Spacer } from '../../others/components/Spacer';
import { Country } from '../../others/contexts/api';
import styles from "./countryDetail.module.css";


export interface CountryDetailProps {
  country: Country;
}

export function CountryDetail({ country }: CountryDetailProps) {
  const inhouse = country?.info?.services?.inhouse;
  const external = country?.info?.services?.external;

  return (
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
      {inhouse && inhouse.length > 0 && (
        <ServiceList
          title={t("country_detail_our_services")}
          services={inhouse}
        />
      )}
      <Spacer size={30} />
      {external && external.length > 0 && (
        <ServiceList
          title={t("country_detail_trusted_services")}
          services={external}
        />
      )}
    </React.Fragment>
  );
}