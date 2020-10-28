import React from "react";
import ShopDetailsCard from "./ShopDetailsCard";

export default {
  title: "Cards/ShopDetailsCard",
  component: ShopDetailsCard,
  argTypes: {
    Card: { control: "color" },
    SmallImage: { control: "color" },
    ShopNameColor: { control: "color" },
    ShopAddressColor: { control: "color" },
    CardBackgroundImage: { control: "text" },
    SmallCardBackgroundImage: { control: "text" },
  },
};

const ShopDetailsCardTemplates = (args) => <ShopDetailsCard {...args} />;
export const ViewShopDetailsCard = ShopDetailsCardTemplates.bind({});
