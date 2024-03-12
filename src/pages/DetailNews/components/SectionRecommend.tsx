import ListMediumCard from "@/common/ListCard/ListMediumCard";
import TitleTopic from "@/common/TitleTopic/TitleTopic";
import { TNews } from "@/types";

interface ISectionRecommendProps {
  data?: TNews[];
}
export default function SectionRecommend({ data }: ISectionRecommendProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-5">
        <TitleTopic title="BẠn có thể quan tâm" />
      </div>
      <div className="flex justify-center">
        <ListMediumCard
          listMediumCardData={data}
          isWrap
          className="grid grid-cols-3 gap-5"
        />
      </div>
    </div>
  );
}
