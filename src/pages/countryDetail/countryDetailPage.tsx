import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../others/components/Header';
import { Content } from '../../others/components/Content';
import { useCountriesQuery } from '../../others/contexts/api';
import { Loader } from '../../others/components/Loader';
import { NotFound } from '../../others/components/NotFound';
import { CountryDetail } from './countryDetail';

interface CountryDetailProps {}

export const CountryDetailPage: React.FunctionComponent<CountryDetailProps> = () => {
  const params = useParams();
  const id = params.id;

  const { data: countries, isFetching } = useCountriesQuery();

  console.log(`id is ${id} and countrie sis `, countries);
  const country = countries?.find((c) => c.id.toLocaleLowerCase() === id);

  console.log(`Country is ${country} and countrie sis `, countries);

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
