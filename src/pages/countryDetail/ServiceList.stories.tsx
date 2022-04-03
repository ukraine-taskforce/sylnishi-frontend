import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { SERVICE_TYPE } from '../../others/contexts/service';
import { ServiceList } from './ServiceList';

export default {
  title: 'Example/ServiceList',
  component: ServiceList,
} as ComponentMeta<typeof ServiceList>;

const Template: ComponentStory<typeof ServiceList> = (args) => (
  <MemoryRouter>
    <ServiceList {...args} />
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Services list title',
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
  ],
};
