import React from "react";
import SliderDots from "./SliderDots";

export default {
  title: "Carousel/SliderDots",
  component: SliderDots,
  argTypes: {},
};
const SliderDotsTemplates = (args) => <SliderDots {...args} />;
export const ViewSliderDots = SliderDotsTemplates.bind({});
