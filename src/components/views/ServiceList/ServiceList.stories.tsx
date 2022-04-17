import { SERVICE_TYPE } from "@models/service";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { ServiceList } from "./ServiceList";

export default {
  title: "Example/ServiceList",
  component: ServiceList,
} as ComponentMeta<typeof ServiceList>;

const Template: ComponentStory<typeof ServiceList> = (args) => (
  <MemoryRouter>
    <ServiceList {...args} />
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Services list title",
  services: [
    {
      id: "request",
      category: "Request supplies",
      type: SERVICE_TYPE.INTERNAL,
      path: "https://requests.ugtf.app",
    },
    {
      id: "psyche",
      category: "Psychological support",
      type: SERVICE_TYPE.EXTERNAL,
      path: "/",
    },
  ],
};
