import { useGetNewestNews } from "@/Services/api/news/useGetNewestNews";
import { useGetNewsBySlugTopic } from "@/Services/api/news/useGetNewsBySlugTopic";
import ListCard from "@/common/ListCard/ListCard";
import Loading from "@/common/Loading/Loading";
import TitleTopic from "@/common/TitleTopic/TitleTopic";
import HotTagsSection from "@/pages/MainPage/components/HotTagsSection";
import MiniTopicSection from "@/pages/MainPage/components/MiniTopicSection";
import CarouselSmallCard from "./components/CarouselSmallCard";
import HeroBanner from "./components/HeroBanner";

export default function MainPage() {
  const { data, isLoading } = useGetNewestNews(0);
  const { data: dataTechnology } = useGetNewsBySlugTopic("cong-nghe", 7);
  const { data: dataPolitics } = useGetNewsBySlugTopic("chinh-tri", 7);
  const dataHeroBanner = data?.slice(0, 8);
  const dataCarouselSmallCard = data?.slice(8, 18);
  const dataHotTagsSection = data?.slice(18, 23);
  const newestNewsData = data?.slice(23, 33);

  return (
    <div>
      <Loading isLoading={isLoading} />
      <HeroBanner data={dataHeroBanner} />
      <div className="flex justify-center mt-7">
        <CarouselSmallCard topic="hot" data={dataCarouselSmallCard} />
      </div>
      <div className="mt-8 flex desktop-lg:justify-center laptop:w-content">
        <HotTagsSection title="MULTIMEDIA" data={dataHotTagsSection} />
      </div>
      <div className="flex justify-center mt-8">
        <div>
          <div className="my-4">
            <TitleTopic title="Tin Mới" underline />
          </div>
          <ListCard listCardData={newestNewsData} />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <MiniTopicSection title="Công Nghệ" data={dataTechnology} />
      </div>
      <div className="flex justify-center mt-10">
        <MiniTopicSection
          title="Chính Trị"
          topicSlug="chinh-tri"
          data={dataPolitics}
        />
      </div>
    </div>
  );
}
