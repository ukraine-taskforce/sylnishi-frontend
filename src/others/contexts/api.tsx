import { useTranslation } from "react-i18next";
import { QueryClient, useQuery } from "react-query";


import { API_MOCK } from "./apiMockData";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3, //3 Minutes
    },
  },
});

export const API_DOMAIN = process.env.REACT_APP_API_DOMAIN || "http://127.0.0.1";

export type ID = string;

export type ServiceType = "external" | "supplies" | "chat";

export interface Service {
  id: ID;
  name: string;
  type: ServiceType;
  path: string;
}

export interface CountryInfo {
  services: {
    inhouse: Service[];
    external: Service[];
  };
}

export interface Country {
  id: ID;
  name: string;
  info: CountryInfo;
}

export function useCountriesQuery() {
  const { i18n } = useTranslation();

  return useQuery<Country[]>(`locationQuery${i18n.language}`, async () => {
    try {
      const result = await fetch(`${API_DOMAIN}/countries?locale=${i18n.language}`)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);

          return res;
        })
        .then((res) => res.json());

      return result.locations.filter((location: Country) => Boolean(location.name) && Boolean(location.id));
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        return API_MOCK;
      }
      throw error;
    }
  });
}
