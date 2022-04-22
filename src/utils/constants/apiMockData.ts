import { Country } from '@models/country';
import { ServiceType } from '@models/service';

const API_MOCK: Country[] = [
  {
    id: 'ua',
    name: 'Ukraine',
    services: [
      {
        id: 'request',
        category: 'Request supplies',
        type: ServiceType.EXTERNAL,
        path: 'https://requests.ugtf.app',
      },
      {
        id: 'psyche',
        category: 'Psychological support',
        type: ServiceType.INTERNAL,
        path: '/',
      },
      {
        id: 'uk_external_1',
        category: 'Top trusted service 1',
        type: ServiceType.EXTERNAL,
        path: '/',
      },
      {
        id: 'uk_external_2',
        category: 'Top trusted service 2',
        type: ServiceType.EXTERNAL,
        path: '/',
      },
      {
        id: 'uk_external_3',
        category: 'Top trusted service 3',
        type: ServiceType.EXTERNAL,
        path: '/',
      },
      {
        id: 'uk_external_4',
        category: 'Top trusted service 4',
        type: ServiceType.EXTERNAL,
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
        category: 'Psychological support',
        type: ServiceType.INTERNAL,
        path: '/',
      },
      {
        id: 'de_external_1',
        category: 'Top trusted service 1',
        type: ServiceType.EXTERNAL,
        path: '/',
      },
      {
        id: 'de_external_2',
        category: 'Top trusted service 2',
        type: ServiceType.EXTERNAL,
        path: '/',
      },
      {
        id: 'de_external_3',
        category: 'Top trusted service 3',
        type: ServiceType.EXTERNAL,
        path: '/',
      },
      {
        id: 'de_external_4',
        category: 'Top trusted service 4',
        type: ServiceType.EXTERNAL,
        path: '/',
      },
    ],
  },
];

export default API_MOCK;
