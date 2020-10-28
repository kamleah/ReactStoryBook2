import React from "react";
import ListViewCard from "./ListViewCard";

export default {
  title: "Cards/ListViewCard",
  component: ListViewCard,
  argTypes: {
    TextOneColor: { control: "color" },
    backgroundColor: { control: "color" },
    comment: { control: "color" },
    commentBackground: { control: "color" },
    borderColor: { control: "color" },
    comments: { control: "text" },
    title: { control: "text" },
    subTitle: { control: "text" },
    UserName: { control: "text" },
    EditedDate: { control: "text" },
    RepliedUser: { control: "text" },
    RepliedDate: { control: "text" },
    CommentNo: { control: "text" },
    ViewedBy: { control: "text" },
  },
};

const ListViewCardTemplates = (args) => <ListViewCard {...args} />;
export const ViewListViewCard = ListViewCardTemplates.bind({});
