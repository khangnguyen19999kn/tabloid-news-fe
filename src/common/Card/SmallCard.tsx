import { TSmallCard } from "@/types";
import { Link } from "react-router-dom";

interface ISmallCardProps {
  dataSmallCard: TSmallCard;
}
export default function SmallCard({ dataSmallCard }: ISmallCardProps) {
  const { title, image, slugLink } = dataSmallCard;
  return (
    <Link to={`/detail/${slugLink}`} className="group">
      <div className="flex flex-col w-[220px] h-[200px] border border-gray-300 rounded">
        <img src={image} alt={title} />
        <h3 className="text-sm font-semibold group-hover:text-blue-400 transition p-2">
          {title}
        </h3>
      </div>
    </Link>
  );
}
