import { useQuery } from "@tanstack/react-query";
import newsApi from "../service/news.api";
import { newsKeys } from "./queryKey";

export const useGetNewsWithPagination = (
  slugTopic: string,
  pageNumber: number,
  pageSize: number,
) => {
  return useQuery({
    queryKey: newsKeys.listNewsWithPagination(slugTopic, pageNumber, pageSize),
    queryFn: () =>
      newsApi.getNewsBySlugTopicWithPage(slugTopic, pageNumber, pageSize),
    staleTime: 1000 * 60 * 10,
    enabled: !!slugTopic,
  });
};
