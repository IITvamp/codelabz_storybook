/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import HomePage from "../../components/HomePage/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home",
  component: HomePage,
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
    <HomePage {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  background: "white",
  textColor: "black",
};
