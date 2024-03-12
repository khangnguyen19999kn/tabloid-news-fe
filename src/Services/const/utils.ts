import { URL_BASE } from "@/Services/const";
import { TNews } from "@/types";

export const getUrlDetail = (path: string) => {
  return `${URL_BASE}/detail/${path}`;
};
export const convertNewsToMiniCardMediumCard = (news: TNews) => {
  return {
    id: news.id,
    title: news.title,
    image: news.bannerImg,
    slugLink: news.slug,
  };
};
export const convertNewsToBigCard = (news: TNews) => {
  return {
    id: news.id,
    title: news.title,
    description: news.description,
    image: news.bannerImg,
    slugLink: news.slug,
  };
};
