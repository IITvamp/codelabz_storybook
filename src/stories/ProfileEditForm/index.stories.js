/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import EditProfileDetailsModal from "../../components/ProfileForm/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "ProfileForm",
  component: EditProfileDetailsModal,
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
    <EditProfileDetailsModal {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  background: "white",
  textColor: "black",
};
