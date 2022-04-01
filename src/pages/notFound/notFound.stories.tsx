import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFound } from '.';

export default {
  title: 'Example/NotFound',
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = () => <MemoryRouter><NotFound /></MemoryRouter>;

export const Primary = Template.bind({});
Primary.args = {};
