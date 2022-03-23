/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Profile from "../../components/ProfileHeader/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Profile",
  component: Profile,
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
    <Profile {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  background: "white",
  textColor: "black",
};
