import React from "react";
import Header from "./Header";

export default {
  title: "Header&Footer/Header",
  component: Header,
};

const HeaderTemplates = (args) => <Header {...args} />;
export const ViewHeader = HeaderTemplates.bind({});
