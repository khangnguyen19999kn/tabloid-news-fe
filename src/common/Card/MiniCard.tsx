import { TMiniCard } from "@/types";
import { Link } from "react-router-dom";

interface IMiniCardProps {
  dataMiniCard: TMiniCard;
}
export default function MiniCard({ dataMiniCard }: IMiniCardProps) {
  const { title, image, slugLink } = dataMiniCard;
  return (
    <Link to={`/detail/${slugLink}`} className="flex w-[320px]">
      <img className="w-2/5" src={image} alt={title} />
      <h3 className="w-3/5 pl-5 font-semibold">{title}</h3>
    </Link>
  );
}
