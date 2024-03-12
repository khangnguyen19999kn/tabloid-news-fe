import { convertNewsToBigCard } from "@/Services/const/utils";
import Card from "@/common/Card/Card";
import { TNews } from "@/types";

interface IListCardProps {
  listCardData?: TNews[];
}
export default function ListCard({ listCardData }: IListCardProps) {
  const showListCard = () => {
    return listCardData?.map((item, index) => {
      return (
        <div key={item.id} className={`${index === 0 ? "" : "mt-5"}`}>
          <Card dataCard={convertNewsToBigCard(item)} key={item.id} />
        </div>
      );
    });
  };
  return <div>{showListCard()}</div>;
}
