import BigCard from "@/common/Card/BigCard";
import ListMediumCard from "@/common/ListCard/ListMediumCard";
import TitleTopic from "@/common/TitleTopic/TitleTopic";
import { TNews } from "@/types";

interface IHotTagsSectionProps {
  className?: string;
  title: string;
  data?: TNews[];
}
export default function HotTagsSection({
  className,
  title,
  data,
}: IHotTagsSectionProps) {
  const dataBigCard = data?.[0];
  return (
    <div
      className={`${
        className ? className : "desktop-lg:w-11/12 laptop:w-[1170px] p-10 bg-[#ffde76] h-[700px]"
      }`}
    >
      <TitleTopic title={title} />
      <div className="flex justify-evenly mt-5 gap-5">
        <BigCard data={dataBigCard} className="w-[500px]" />
        <ListMediumCard
          listMediumCardData={data?.slice(1)}
          className="grid grid-cols-2 gap-7 pl-5"
          isWrap
        />
      </div>
    </div>
  );
}
