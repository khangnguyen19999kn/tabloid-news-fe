export const newsKeys = {
  all: () => ["news-list"] as const,
  newest: () => ["news-newest"] as const,
  content: (id: string) => [...newsKeys.all(), "list", id] as const,
  listBySlugTopic: (slugTopic: string, numberPost: number) =>
    [...newsKeys.all(), "list", slugTopic, numberPost] as const,
  listNewsWithPagination: (
    slugTopic: string,
    pageNumber: number,
    pageSize: number,
  ) => [...newsKeys.all(), "list", slugTopic, pageNumber, pageSize] as const,
};
