import { Country } from './country';
import { SERVICE_TYPE } from './service';

export const API_MOCK: Country[] = [
  {
    id: 'ua',
    name: 'Ukraine',
    services: [
      {
        id: 'request',
        name: 'Request supplies',
        type: SERVICE_TYPE.SUPPLIES,
        path: 'https://requests.ugtf.app',
      },
      {
        id: 'psyche',
        name: 'Psychological support',
        type: SERVICE_TYPE.CHAT,
        path: '/',
      },
      {
        id: 'uk_external_1',
        name: 'Top trusted service 1',
        type: SERVICE_TYPE.EXTERNAL,
        path: '/',
      },
      {
        id: 'uk_external_2',
        name: 'Top trusted service 2',
        type: SERVICE_TYPE.EXTERNAL,
        path: '/',
      },
      {
        id: 'uk_external_3',
        name: 'Top trusted service 3',
        type: SERVICE_TYPE.EXTERNAL,
        path: '/',
      },
      {
        id: 'uk_external_4',
        name: 'Top trusted service 4',
        type: SERVICE_TYPE.EXTERNAL,
        path: '/',
      },
    ],
  },
  {
    id: 'de',
    name: 'Germany',
    services: [
      {
        id: 'psyche',
        name: 'Psychological support',
        type: SERVICE_TYPE.CHAT,
        path: '/',
      },
      {
        id: 'de_external_1',
        name: 'Top trusted service 1',
        type: SERVICE_TYPE.EXTERNAL,
        path: '/',
      },
      {
        id: 'de_external_2',
        name: 'Top trusted service 2',
        type: SERVICE_TYPE.EXTERNAL,
        path: '/',
      },
      {
        id: 'de_external_3',
        name: 'Top trusted service 3',
        type: SERVICE_TYPE.EXTERNAL,
        path: '/',
      },
      {
        id: 'de_external_4',
        name: 'Top trusted service 4',
        type: SERVICE_TYPE.EXTERNAL,
        path: '/',
      },
    ],
  },
];
