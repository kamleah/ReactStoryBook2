import React from "react";
import CardHeader from "./CardHeader";
export default {
  title: "Cards/CardHeader",
  component: CardHeader,
  argTypes: {
    borderColor: { control: "color" },
    HeaderBackground: { control: "color" },
  },
};
const CardHeaderTemplates = (args) => <CardHeader {...args} />;
export const ViewCardHeader = CardHeaderTemplates.bind({});
