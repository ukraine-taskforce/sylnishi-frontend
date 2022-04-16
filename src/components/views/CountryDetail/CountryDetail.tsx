import { t } from "i18next";
import React from "react";
import { AvailableISO, FlagIcon, ISO2RFC } from "../../icons/FlagIcon/FlagIcon";
import { ServiceList } from "../ServiceList/ServiceList";
import { Spacer } from "../../layout/Spacer/Spacer";
import { Country } from "../../../contexts/country";
import styles from "./CountryDetail.module.css";
import { SERVICE_TYPE } from "../../../contexts/service";

export interface CountryDetailProps {
  country: Country;
}

export function CountryDetail({ country }: CountryDetailProps) {
  const inhouse = country.services.filter((service) => service.type !== SERVICE_TYPE.EXTERNAL);
  const external = country.services.filter((service) => service.type === SERVICE_TYPE.EXTERNAL);

  return (
    <React.Fragment>
      <Spacer size={30} />
      <div className={styles.countryWrapper}>
        <FlagIcon
          alt=""
          lang={ISO2RFC[country.id.toLowerCase() as AvailableISO]}
          className={styles.countryIcon}
        ></FlagIcon>
        <h1 className={styles.headline}>{t(country.name)}</h1>
      </div>
      {inhouse && inhouse.length > 0 && (
        <>
          <Spacer size={30} />
          <ServiceList title={t("country_detail_our_services")} services={inhouse} />
        </>
      )}
      {external && external.length > 0 && (
        <>
          <Spacer size={30} />
          <ServiceList title={t("country_detail_trusted_services")} services={external} />
        </>
      )}
    </React.Fragment>
  );
}
