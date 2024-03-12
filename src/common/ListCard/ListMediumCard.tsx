import { convertNewsToMiniCardMediumCard } from "@/Services/const/utils";
import MediumCard from "@/common/Card/MediumCard";
import { TNews } from "@/types";

interface IListMediumCardProps {
  listMediumCardData?: TNews[];
  className?: string;
  isWrap?: boolean;
  underline?: boolean;
}
export default function ListMediumCard({
  listMediumCardData,
  className = "flex flex-col",
  isWrap = false,
  underline = false,
}: IListMediumCardProps) {
  const showListMediumCard = () => {
    return listMediumCardData?.map((item, index) => {
      return (
        <div key={item.id} className={`${index === 0 || isWrap ? "" : "mt-5"}`}>
          {index !== 0 && underline && <hr className="mb-5" />}
          <MediumCard
            className="laptop:w-[290px] h-[200px]"
            dataMediumCard={convertNewsToMiniCardMediumCard(item)}
            key={item.id}
          />
        </div>
      );
    });
  };
  return <div className={className}>{showListMediumCard()}</div>;
}
