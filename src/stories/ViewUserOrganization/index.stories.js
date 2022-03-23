import React from "react";
import ViewUserOrganization from "../../components/ViewUserOrganisation/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "ViewUserOrganization",
  component: ViewUserOrganization,
  argTypes: {
    background: {
      control: "color",
    },
    textColor: {
      control: "color",
    },
  },
};

const Template = (args) => (
  <MemoryRouter>
    <ViewUserOrganization {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  background: "white",
  textColor: "black",
};
