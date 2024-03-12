import { newsKeys } from "@/Services/api/news/queryKey";
import newsApi from "@/Services/api/service/news.api";
import { CACHE_DATA_STALE_TIME } from "@/Services/const";
import { useQuery } from "@tanstack/react-query";

export const useGetDetailNews = (slug: string) => {
  return useQuery({
    queryKey: newsKeys.content(slug),
    queryFn: () => newsApi.getNewsBySlug(slug),
    staleTime: CACHE_DATA_STALE_TIME.MEDIUM,
    enabled: !!slug,
  });
};
