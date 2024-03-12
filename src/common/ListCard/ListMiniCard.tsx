import { convertNewsToMiniCardMediumCard } from "@/Services/const/utils";
import MiniCard from "@/common/Card/MiniCard";
import { TNews } from "@/types";

interface IListMiniCardProps {
  listMiniCardData?: TNews[];
}
export default function ListMiniCard({ listMiniCardData }: IListMiniCardProps) {
  const showListMiniCard = () => {
    return listMiniCardData?.map((item, index) => {
      return (
        <>
          {index !== 0 && <hr className="my-3" />}
          <MiniCard
            dataMiniCard={convertNewsToMiniCardMediumCard(item)}
            key={item.id}
          />
        </>
      );
    });
  };
  return (
    <div className="flex flex-col w-[fit-content]">{showListMiniCard()}</div>
  );
}
