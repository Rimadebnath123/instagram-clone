import React from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { RiVideoAddLine } from "react-icons/ri";

const ReqUserPostPart = () => {
  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable></AiOutlineTable>,
      activeTab: "",
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine></RiVideoAddLine>,
    },
    {
      tab: "Saved",
      icon: <BiBookmark></BiBookmark>,
    },
    {
      tab: "tagged",
      icon: <AiOutlineUser></AiOutlineUser>,
    },
  ];
  return (
    <div>
      <div>
        {tabs.map((item) =>
          <div className="flex items-center cursor-pointer py-2 text-sm">
            <p>{item.icon}</p>
            <p>{item.tab}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReqUserPostPart;
