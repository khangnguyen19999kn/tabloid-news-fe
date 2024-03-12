import { convertNewsToBigCard } from "@/Services/const/utils";
import { TNews } from "@/types";
import { Link } from "react-router-dom";

interface IBigCardProps {
  data?: TNews;
  className?: string;
}
export default function BigCard({
  data,
  className = "w-[600px] h-[350px]",
}: IBigCardProps) {
  if (!data) return null;
  const { title, description, image, slugLink } = convertNewsToBigCard(data);
  return (
    <Link to={`/detail/${slugLink}`} className={`${className} cursor-pointer`}>
      <div className="flex justify-center">
        <img className="w-full h-full" src={image} alt="BigCard" />
      </div>
      <div className="flex flex-col mt-3">
        <h1 className="text-3xl font-bold group-hover:text-blue-400 transition-all">
          {title}
        </h1>
        <p className="text-base text-gray-500 mt-2">{description}</p>
      </div>
    </Link>
  );
}
