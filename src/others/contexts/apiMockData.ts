import { Country } from "./api";

export const API_MOCK: Country[] = [
  {
    id: "ua",
    name: "Ukraine",
    info: {
      services: {
        inhouse: [
          {
            id: "request",
            name: "Request supplies",
            type: "supplies",
            path: "https://requests.ugtf.app",
          },
          {
            id: "psyche",
            name: "Psychological support",
            type: "chat",
            path: "/",
          },
        ],
        external: [
          {
            id: "uk_external_1",
            name: "Top trusted service 1",
            type: "external",
            path: "/",
          },
          {
            id: "uk_external_2",
            name: "Top trusted service 2",
            type: "external",
            path: "/",
          },
          {
            id: "uk_external_3",
            name: "Top trusted service 3",
            type: "external",
            path: "/",
          },
          {
            id: "uk_external_4",
            name: "Top trusted service 4",
            type: "external",
            path: "/",
          },
        ],
      },
    },
  },
  {
    id: "de",
    name: "Germany",
    info: {
      services: {
        inhouse: [
          {
            id: "psyche",
            name: "Psychological support",
            type: "chat",
            path: "/",
          },
        ],
        external: [
          {
            id: "de_external_1",
            name: "Top trusted service 1",
            type: "external",
            path: "/",
          },
          {
            id: "de_external_2",
            name: "Top trusted service 2",
            type: "external",
            path: "/",
          },
          {
            id: "de_external_3",
            name: "Top trusted service 3",
            type: "external",
            path: "/",
          },
          {
            id: "de_external_4",
            name: "Top trusted service 4",
            type: "external",
            path: "/",
          },
        ],
      },
    },
  },
];
