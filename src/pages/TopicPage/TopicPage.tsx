import { useGetNewsBySlugTopic } from "@/Services/api/news/useGetNewsBySlugTopic";
import { mapSlugToTopic } from "@/Services/const/map";
import ListCard from "@/common/ListCard/ListCard";
import Loading from "@/common/Loading/Loading";
import TitleTopic from "@/common/TitleTopic/TitleTopic";
import HeroBanner from "@/pages/TopicPage/components/HeroBanner";
import { useParams } from "react-router-dom";

export default function TopicPage() {
  const { topicSlug } = useParams();
  const titleTopic = topicSlug && mapSlugToTopic[topicSlug].toUpperCase();
  const { data, isLoading } = useGetNewsBySlugTopic(topicSlug || "", 0);
  const dataHeroBanner = data?.slice(0, 7);
  const dataListCard = data?.slice(7);
  return (
    <div className="p-0">
      <Loading isLoading={isLoading} />
      <h1 className="text-5xl font-bold text-center border-b-4 border-gray-800 p-6">
        {titleTopic}
      </h1>
      <div className="mt-8">
        <HeroBanner data={dataHeroBanner} />
      </div>
      <div className="mt-8">
        <TitleTopic title="Tin Mới" underline />
        <div className="mt-5 p-5">
          <ListCard listCardData={dataListCard} />
          {/* <InfinityScroll /> */}/
        </div>
      </div>
    </div>
  );
}
