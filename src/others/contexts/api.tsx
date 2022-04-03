import { useTranslation } from 'react-i18next';
import { QueryClient, useMutation, useQuery } from 'react-query';

import { API_MOCK } from './apiMockData';
import { Country } from './country';
import { parseServicesListCSV } from './parseServicesListCSV';
import { TrackingData } from './tracking';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3, //3 Minutes
    },
  },
});

export const API_DOMAIN = process.env.REACT_APP_API_DOMAIN || 'http://127.0.0.1';

export function useCountriesQuery() {
  const { i18n } = useTranslation();

  return useQuery<Country[]>(`locationQuery${i18n.language}`, async () => {
    try {
      const response = await fetch(`./assets/dataset.csv`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const text = await response.text();
      return Object.values(parseServicesListCSV(text));
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        return API_MOCK;
      }
      throw error;
    }
  });
}

export function useSubmitTracking() {
  return useMutation('submitTracking', async (trackingData: TrackingData) => {
    try {
      // const recaptchaToken = await generateCaptchaToken("submit");
      const result = await fetch(`${API_DOMAIN}/tracking`, {
        method: 'POST',
        body: JSON.stringify({
          ...trackingData,
        }),
      })
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);

          return res;
        })
        .then((res) => res.json());

      return result;
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        return null;
      }

      throw error;
    }
  });
}
