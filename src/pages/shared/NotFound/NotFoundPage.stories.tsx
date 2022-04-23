import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';

export default {
  title: 'Example/NotFound',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <MemoryRouter><NotFoundPage /></MemoryRouter>;

export const Primary = Template.bind({});
Primary.args = {};
