import BigCard from "@/common/Card/BigCard";
import ListMediumCard from "@/common/ListCard/ListMediumCard";
import ListMiniCard from "@/common/ListCard/ListMiniCard";
import TitleTopic from "@/common/TitleTopic/TitleTopic";
import { TNews } from "@/types";

interface IMiniTopicSectionProps {
  className?: string;
  title: string;
  topicSlug?: string;
  data?: TNews[];
}
export default function MiniTopicSection({
  className,
  title,
  topicSlug,
  data,
}: IMiniTopicSectionProps) {
  const dataBigCard = data?.[0];
  const dataListMediumCard = data?.slice(0, 2);
  const dataListMinicard = data?.slice(2);
  return (
    <div className={`${className ? className : "h-[fit-content]"}`}>
      <TitleTopic title={title} underline topicSlug={topicSlug} />
      <div className="flex justify-around mt-5 gap-3">
        <BigCard data={dataBigCard} className="w-[600px] h-[500px]" />
        <div className="pl-3">
          <ListMediumCard
            listMediumCardData={dataListMediumCard}
            className="flex flex-col"
            isWrap
          />
        </div>
        <div className="border-l border-gray-200 pl-3">
          <ListMiniCard listMiniCardData={dataListMinicard} />
        </div>
      </div>
    </div>
  );
}
