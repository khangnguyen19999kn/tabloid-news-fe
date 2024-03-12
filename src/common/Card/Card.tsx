import { TCard } from "@/types";
import { Link } from "react-router-dom";

interface ICardProps {
  dataCard: TCard;
}

export default function Card({ dataCard }: ICardProps) {
  const { title, image, slugLink, description } = dataCard;
  return (
    <Link
      to={`/detail/${slugLink}`}
      className="group flex w-[1170px] h-[170px]"
    >
      <img className="w-1/5" src={image} alt={title} />
      <div className="w-4/5">
        <h3 className="pl-5 font-semibold group-hover:text-blue-400 transition">
          {title}
        </h3>
        <p className="pl-5 font-normal text-gray-400">{description}</p>
      </div>
    </Link>
  );
}
