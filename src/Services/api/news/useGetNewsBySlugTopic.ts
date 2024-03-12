import { newsKeys } from "@/Services/api/news/queryKey";
import newsApi from "@/Services/api/service/news.api";
import { CACHE_DATA_STALE_TIME } from "@/Services/const";
import { useQuery } from "@tanstack/react-query";

export const useGetNewsBySlugTopic = (
  slugTopic: string,
  numberPost: number,
) => {
  return useQuery({
    queryKey: newsKeys.listBySlugTopic(slugTopic, numberPost),
    queryFn: () => newsApi.getListNewsBySlugTopic(slugTopic, numberPost),
    staleTime: CACHE_DATA_STALE_TIME.MEDIUM,
    enabled: !!slugTopic,
  });
};
