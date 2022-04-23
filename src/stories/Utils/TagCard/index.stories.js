import React from "react";
import TagCard from "../../../components/util/TagCard/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Utils/TagCard",
  component: TagCard,
  argTypes: {
    background: {
      control: "color",
    },
  },
};

const Template = (args) => (
  <MemoryRouter>
    <TagCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  textColor: "black",
  CardName: "Trending",
  ListItemArray: ["Javascript", "React", "HTML", "CSS"],
};
