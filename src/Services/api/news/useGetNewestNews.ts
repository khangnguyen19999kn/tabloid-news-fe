import { CACHE_DATA_STALE_TIME } from "@/Services/const";
import { useQuery } from "@tanstack/react-query";
import newsApi from "../service/news.api";
import { newsKeys } from "./queryKey";

export const useGetNewestNews = (numberPostGet: number) => {
  return useQuery({
    queryKey: newsKeys.newest(),
    queryFn: () => newsApi.getListNewestNews(numberPostGet),
    staleTime: CACHE_DATA_STALE_TIME.MEDIUM,
  });
};
