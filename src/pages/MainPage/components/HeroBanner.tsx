import BigCard from "@/common/Card/BigCard";
import ListMediumCard from "@/common/ListCard/ListMediumCard";
import ListMiniCard from "@/common/ListCard/ListMiniCard";
import { TNews } from "@/types";

interface IHeroBanner {
  data?: TNews[];
}

export default function HeroBanner({ data }: IHeroBanner) {
  const dataBigCard = data?.[0];
  const dataListMediumCard = data?.slice(1, 3);
  const dataListMiniCard = data?.slice(3, 8);
  return (
    <div className="flex gap-5 justify-center cursor-pointer">
      <ListMiniCard listMiniCardData={dataListMiniCard} />
      <BigCard data={dataBigCard} />
      <ListMediumCard listMediumCardData={dataListMediumCard} />
    </div>
  );
}
