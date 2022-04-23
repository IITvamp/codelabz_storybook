import React from "react";
import GlobalButton from "../../../components/util/Button/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Utils/GlobalButton",
  component: GlobalButton,
  argTypes: {
    background: {
      control: "color",
    },
  },
};

const Template = (args) => (
  <MemoryRouter>
    <GlobalButton {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  variant : "contained",
  color : "primary",
  backgroundColor : "royalblue",
  text : "10 min read",
};
