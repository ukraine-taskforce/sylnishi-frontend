import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { CountryDetail } from '.';

export default {
  title: 'Example/CountryDetail',
  component: CountryDetail,
} as ComponentMeta<typeof CountryDetail>;

const Template: ComponentStory<typeof CountryDetail> = (args) => <MemoryRouter><CountryDetail {...args} /></MemoryRouter>;

export const Primary = Template.bind({});
Primary.args = {
  country: {
    id: 'ua',
    name: 'Ukraine',
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
          }
        ],
      }
    } 
  }
};
