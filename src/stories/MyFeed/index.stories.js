/* eslint-disable import/no-anonymous-default-export */
import React from "react";
// import Profile from "../../components/ProfileHeader/index";
import MyFeed from "../../components/MyFeed/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "MyFeed",
  component: MyFeed,
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
    <MyFeed {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  background: "white",
  textColor: "black",
};
