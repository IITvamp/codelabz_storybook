import React from "react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../../components/Footer/index";

export default {
  title: "Footer",
  component: Footer,
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
    <Footer />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  background: "white",
  textColor: "black",
};
