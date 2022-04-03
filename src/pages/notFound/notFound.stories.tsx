import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from '.';

export default {
  title: 'Example/NotFound',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <MemoryRouter><NotFoundPage /></MemoryRouter>;

export const Primary = Template.bind({});
Primary.args = {};
