/* eslint-disable import/no-anonymous-default-export */
import React from "react";
// import Profile from "../../components/ProfileHeader/index";
import ViewOrganization from "../../components/ViewOrganization/index"
import { MemoryRouter } from "react-router-dom";

export default {
  title: "ViewOrganization",
  component: ViewOrganization,
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
    <ViewOrganization {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  background: "white",
  textColor: "black",
};
