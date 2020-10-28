import React from "react";
import Header from "./Header";

export default {
  title: "Form/Header",
  component: Header,
};

export const Small = () => <Header size="small" />;
export const Medium = () => <Header size="medium" />;
export const Large = () => <Header size="large" />;
