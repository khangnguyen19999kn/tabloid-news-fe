import { listTopicShowInHeader } from "@/Services/const";
import logo from "@/assets/images/logo.png";
import TitleTopic from "@/common/TitleTopic/TitleTopic";
import { Button, Image } from "@mantine/core";
import { IconDots, IconSearch, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const closeToggle = () => {
    setToggle(false);
  };
  const showListTopicInHeader = listTopicShowInHeader
    .slice(0, 7)
    .map((topic) => {
      return (
        <div
          key={topic.id}
          className="flex justify-center items-center hover:text-blue-300 hover:border-b border-blue-300"
        >
          <Link to={topic.slug} className="text-lg font-semibold">
            {topic.name}
          </Link>
        </div>
      );
    });
  const showTopicFull = listTopicShowInHeader.map((topic) => {
    return (
      <Button
        key={topic.id}
        className="mt-2 cursor-pointer"
        onClick={closeToggle}
      >
        <TitleTopic
          title={topic.name}
          topicSlug={topic.slug}
          textColor="text-gray-200"
        />
      </Button>
    );
  });

  return (
    <div className="w-full h-20 sticky top-0 border-b border-slate-300 bg-white flex justify-center z-10">
      <div className="w-[80%] desktop-lg:w-1/2 flex justify-between relative z-10">
        <div className="w-[250px] flex items-center">
          <Link to="/" onClick={closeToggle}>
            <Image
              src={logo}
              alt="logo"
              width={150}
              styles={{ root: { height: "100px" } }}
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-between">
          {showListTopicInHeader}
          <Button
            onClick={handleToggle}
            className="flex justify-center items-center"
          >
            <h1 className="text-sm font-semibold">
              {toggle ? <IconX /> : <IconDots />}
            </h1>
          </Button>
        </div>
        <Button
          className="w-[250px] flex justify-center items-center"
          onClick={closeToggle}
        >
          <IconSearch />
        </Button>
        {toggle && (
          <div className="w-full bg-[#141329] flex justify-center absolute top-14 transition-all animate-fade-in z-[1000]">
            <div className="grid grid-cols-4 w-2/3 gap-5 py-5">
              {showTopicFull}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
