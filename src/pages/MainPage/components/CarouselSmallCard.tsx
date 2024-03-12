import { convertNewsToMiniCardMediumCard } from "@/Services/const/utils";
import SmallCard from "@/common/Card/SmallCard";
import TitleTopic from "@/common/TitleTopic/TitleTopic";
import { TNews } from "@/types";
import Slider from "react-slick";
import "../styles/carousel.style.scss";
interface ICarouselSmallCardProps {
  topic: string;
  data?: TNews[];
}
export default function CarouselSmallCard({
  topic,
  data,
}: ICarouselSmallCardProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const showSmallCards = () => {
    return data?.map((item) => {
      return (
        <SmallCard
          key={item.id}
          dataSmallCard={convertNewsToMiniCardMediumCard(item)}
        />
      );
    });
  };
  return (
    <div className="w-[1270px] laptop:w-full">
      <TitleTopic title={topic} underline />
      <Slider {...settings}>{showSmallCards()}</Slider>
    </div>
  );
}
