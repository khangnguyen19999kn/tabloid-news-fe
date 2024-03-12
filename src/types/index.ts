export type TMiniCard = {
  id: string;
  title: string;
  image: string;
  slugLink: string;
};
export type TBigCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  slugLink: string;
};
export type TMediumCard = TMiniCard
export type TSmallCard = TMiniCard
export type TCard = TBigCard
export type TNews = {
  id: string,
  title: string,
  slug: string,
  content: string,
  topic: string,
  slugTopic: string,
  author: string,
  tags: [
    string
  ],
  bannerImg: string,
  viewCount: number,
  createdAt: string,
  description: string
}