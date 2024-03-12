import BigCard from "@/common/Card/BigCard";
import ListMediumCard from "@/common/ListCard/ListMediumCard";
import { TNews } from "@/types";
interface IHeroBannerProps {
  data?: TNews[];
}
export default function HeroBanner({ data }: IHeroBannerProps) {
  const dataBigCard = data?.[0];
  const dataMediumCard = data?.slice(1, 3);
  const dataListMediumCard = data?.slice(3, 7);
  return (
    <div>
      <div className="flex justify-around border-b pb-3 border-gray-200">
        <BigCard className="w-800 laptop:w-700" data={dataBigCard} />
        <div className="border-l border-gray-200 " />
        <ListMediumCard
          listMediumCardData={dataMediumCard}
          isWrap={false}
          underline={true}
        />
      </div>
      <div className="mt-5">
        <ListMediumCard
          listMediumCardData={dataListMediumCard}
          className="flex justify-between"
          isWrap
        />
      </div>
    </div>
  );
}
