import { TMediumCard } from "@/types";
import { Link } from "react-router-dom";

interface IMediumCardProps {
  dataMediumCard: TMediumCard;
  className?: string;
}
export default function MediumCard({
  dataMediumCard,
  className = "w-full h-[200px]",
}: IMediumCardProps) {
  const { title, image, slugLink } = dataMediumCard;
  return (
    <Link to={`/detail/${slugLink}`} className="group">
      <div className="flex flex-col w-[300px]">
        <img src={image} alt={title} className={className} />
        <h3 className="text-lg font-bold group-hover:text-blue-400 transition mt-1">
          {title}
        </h3>
      </div>
    </Link>
  );
}
