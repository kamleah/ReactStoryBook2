import React from "react";
import Input from "./Input";

export default {
  title: "Inputs Tags/InputSearch",
  component: Input,
  argTypes: {
    background: { control: "color" },
    onClick: { click: "Clicked" },
  },
};

const InputTemplates = (args) => <Input {...args} />;
export const InputSearch = InputTemplates.bind({});
