import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { CountryDetail } from './CountryDetail';
import { SERVICE_TYPE } from '../../../contexts/service';

export default {
  title: 'Example/CountryDetail',
  component: CountryDetail,
} as ComponentMeta<typeof CountryDetail>;

const Template: ComponentStory<typeof CountryDetail> = (args) => (
  <MemoryRouter>
    <CountryDetail {...args} />
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  country: {
    id: 'ua',
    name: 'Ukraine',
    services: [
      {
        id: 'internal',
        category: 'An internal link',
        type: SERVICE_TYPE.INTERNAL,
        path: 'https://requests.ugtf.app',
      },
      {
        id: 'psyche',
        category: 'Internal chat link',
        type: SERVICE_TYPE.INTERNAL,
        path: '/foo',
      },
      {
        id: 'uk_external_1',
        category: 'Top trusted service 1',
        type: SERVICE_TYPE.EXTERNAL,
        path: '/',
      },
    ],
  },
};
