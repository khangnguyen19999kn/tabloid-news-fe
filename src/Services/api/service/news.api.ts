import { TNews } from "@/types";
import { UseMutationOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export type TResponse<T> = {
  data: T;
  error: 0;
  message: "SUCCESS";
};
export interface INewsResponse {
  totalPages: number;
  data: TNews[];
}
export type TGetNewsResponse = TResponse<INewsResponse>;
export type TActionResponse = TResponse<number | string | boolean>;
export type TConfigMutation<
  TFieldPayload = unknown,
  TFieldResponse = TActionResponse,
> = UseMutationOptions<TFieldResponse, AxiosError, TFieldPayload>;

const pathNewsAPI = {
  allNews: "/news",
  newestNews: (numberPostGet: number) => `/news/newest/${numberPostGet}`,
  getBySlugTopic: (slugTopic: string, numberPost: number) =>
    `/news/byslugtopic/${slugTopic}/${numberPost}`,
  getNewsBySlug: (slug: string) => `/news/${slug}`,
  getNewsBySlugTopicWithPage: (
    slugTopic: string,
    pageNumber: number,
    pageSize: number,
  ) =>
    `/news/byslugtopic?slugTopic=${slugTopic}&page=${pageNumber}&pageSize=${pageSize}`,
};
export const newsApiBase = axios.create({
  baseURL: import.meta.env.VITE_NEWS_API as string,
});

const newsApi = {
  async getListNewestNews(numberPostGet: number) {
    const response = await newsApiBase.get<TNews[]>(
      pathNewsAPI.newestNews(numberPostGet),
    );
    return response.data;
  },
  async getListNewsBySlugTopic(slugTopic: string, numberPost: number) {
    const response = await newsApiBase.get<TNews[]>(
      pathNewsAPI.getBySlugTopic(slugTopic, numberPost),
    );
    return response.data;
  },

  async getNewsBySlug(slug: string) {
    const response = await newsApiBase.get<TNews[]>(
      pathNewsAPI.getNewsBySlug(slug),
    );
    return response.data;
  },
  async getNewsBySlugTopicWithPage(
    slugTopic: string,
    pageNumber: number,
    pageSize: number,
  ) {
    const response = await newsApiBase.get<INewsResponse>(
      pathNewsAPI.getNewsBySlugTopicWithPage(slugTopic, pageNumber, pageSize),
    );
    return response.data;
  },
};

export default newsApi;
