import React from "react";
import Input3 from "./Input3";

export default {
  title: "Inputs/Input3",
  component: Input3,
};

const Input3Templates = (args) => <Input3 {...args} />;
export const InputWithGridients = Input3Templates.bind({});
