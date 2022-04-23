import React from "react";
import GlobalAvatar from "../../../components/util/Avatar/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Utils/GlobalAvatar",
  component: GlobalAvatar,
  argTypes: {
    background: {
      control: "color",
    },
  },
};

const Template = (args) => (
  <MemoryRouter>
    <GlobalAvatar {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  imgsrc: "demoperson4.jpeg",
  title: "Demo Name",
};
