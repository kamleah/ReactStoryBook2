import React from "react";
import Cart from "./Cart";
export default {
  title: "Header&Footer/Cart",
  component: Cart,
  argTypes: {
    borderColor: { control: "color" },
  },
};
const CartTemplates = (args) => <Cart {...args} />;
export const ViewCart = CartTemplates.bind({});
