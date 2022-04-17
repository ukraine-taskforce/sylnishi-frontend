import { Country } from "@models/country";
import { SERVICE_TYPE } from "@models/service";

export const API_MOCK: Country[] = [
  {
    id: "ua",
    name: "Ukraine",
    services: [
      {
        id: "request",
        category: "Request supplies",
        type: SERVICE_TYPE.EXTERNAL,
        path: "https://requests.ugtf.app",
      },
      {
        id: "psyche",
        category: "Psychological support",
        type: SERVICE_TYPE.INTERNAL,
        path: "/",
      },
      {
        id: "uk_external_1",
        category: "Top trusted service 1",
        type: SERVICE_TYPE.EXTERNAL,
        path: "/",
      },
      {
        id: "uk_external_2",
        category: "Top trusted service 2",
        type: SERVICE_TYPE.EXTERNAL,
        path: "/",
      },
      {
        id: "uk_external_3",
        category: "Top trusted service 3",
        type: SERVICE_TYPE.EXTERNAL,
        path: "/",
      },
      {
        id: "uk_external_4",
        category: "Top trusted service 4",
        type: SERVICE_TYPE.EXTERNAL,
        path: "/",
      },
    ],
  },
  {
    id: "de",
    name: "Germany",
    services: [
      {
        id: "psyche",
        category: "Psychological support",
        type: SERVICE_TYPE.INTERNAL,
        path: "/",
      },
      {
        id: "de_external_1",
        category: "Top trusted service 1",
        type: SERVICE_TYPE.EXTERNAL,
        path: "/",
      },
      {
        id: "de_external_2",
        category: "Top trusted service 2",
        type: SERVICE_TYPE.EXTERNAL,
        path: "/",
      },
      {
        id: "de_external_3",
        category: "Top trusted service 3",
        type: SERVICE_TYPE.EXTERNAL,
        path: "/",
      },
      {
        id: "de_external_4",
        category: "Top trusted service 4",
        type: SERVICE_TYPE.EXTERNAL,
        path: "/",
      },
    ],
  },
];
