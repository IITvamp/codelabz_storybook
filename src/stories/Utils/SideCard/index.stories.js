import React from "react";
import SideCard from "../../../components/util/SideCard/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Utils/SideCard",
  component: SideCard,
  argTypes: {
    background: {
      control: "color",
    },
  },
};

const Template = (args) => (
  <MemoryRouter>
    <SideCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  textColor: "black",
  CardName: "Trending",
  ListItemArray: [
    "lorem lorem text lorem text text lorem text lorem text",
    "lorem lorem text lorem text text lorem text lorem text",
    "lorem lorem text lorem text text lorem text lorem text",
    "lorem lorem text lorem text text lorem text lorem text",
  ],
};
