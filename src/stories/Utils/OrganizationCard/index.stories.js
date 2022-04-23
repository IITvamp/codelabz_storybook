import React from "react";
import OrganizationCard from "../../../components/util/OrganizationCard/index";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Utils/OrganizationCard",
  component: OrganizationCard,
  argTypes: {
    background: {
      control: "color",
    },
  },
};

const Template = (args) => (
  <MemoryRouter>
    <OrganizationCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  imgsrc : "HomePageOrg.png",
  orgname:"Samsung",
  orgdesc : "Samsung Electronics Co., Ltd is a South Korean multinational electronics Comp- any headquartered in Suowon, South Korea",
};
