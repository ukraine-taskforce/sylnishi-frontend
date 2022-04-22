import { Country } from '@models/country';
import { API_MOCK } from '@utils/constants/apiMockData';
import { parseServicesListCSV } from '@utils/helpers/parseServicesListCSV';
import { useTranslation } from 'react-i18next';
import { QueryClient, useQuery } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3, // 3 Minutes
    },
  },
});

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
