import React from "react";
// import ProviderWrapper from "../../../helpers/providerWrapper";
import CardComponent from "../../../components/util/CodelabCard/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Utils/CodelabCard",
  component: CardComponent,
  argTypes: {
    background: {
      control: "color",
    },
  },
};

const Template = (args) => (
  <MemoryRouter>
    <CardComponent {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  title: "I made 100 more CSS loaders for your next project",
  tags: "#css #webdev #beginners #html",
  profilePic: "demoperson4.jpeg",
  org: false,
  background: "white",
};
