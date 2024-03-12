import { Topic } from "@/Services/const/enum";
import { mapNameTopicToSlug } from "@/Services/const/map";

export const URL_BASE = import.meta.env.VITE_ROOT_URL_DEV;
export const listTopicShowInHeader = [
  {
    id: 1,
    name: Topic.SOCIETY,
    slug: mapNameTopicToSlug[Topic.SOCIETY],
  },
  {
    id: 2,
    name: Topic.SPORT,
    slug: mapNameTopicToSlug[Topic.SPORT],
  },
  {
    id: 3,
    name: Topic.ENTERTAINMENT,
    slug: mapNameTopicToSlug[Topic.ENTERTAINMENT],
  },
  {
    id: 4,
    name: Topic.EDUCATION,
    slug: mapNameTopicToSlug[Topic.EDUCATION],
  },
  {
    id: 5,
    name: Topic.SCIENCE,
    slug: mapNameTopicToSlug[Topic.SCIENCE],
  },
  {
    id: 6,
    name: Topic.TECHNOLOGY,
    slug: mapNameTopicToSlug[Topic.TECHNOLOGY],
  },
  {
    id: 7,
    name: Topic.ECONOMY,
    slug: mapNameTopicToSlug[Topic.ECONOMY],
  },
  {
    id: 8,
    name: Topic.POLITICS,
    slug: mapNameTopicToSlug[Topic.POLITICS],
  },
  {
    id: 9,
    name: Topic.WORLD,
    slug: mapNameTopicToSlug[Topic.WORLD],
  },
  {
    id: 10,
    name: Topic.LAW,
    slug: mapNameTopicToSlug[Topic.LAW],
  },
  {
    id: 11,
    name: Topic.HEALTH,
    slug: mapNameTopicToSlug[Topic.HEALTH],
  },
  {
    id: 12,
    name: Topic.CULTURE,
    slug: mapNameTopicToSlug[Topic.CULTURE],
  },
  {
    id: 13,
    name: Topic.LIFE,
    slug: mapNameTopicToSlug[Topic.LIFE],
  },
  {
    id: 14,
    name: Topic.TRAVEL,
    slug: mapNameTopicToSlug[Topic.TRAVEL],
  },
  {
    id: 15,
    name: Topic.FASHION,
    slug: mapNameTopicToSlug[Topic.FASHION],
  },
  {
    id: 16,
    name: Topic.FOOD,
    slug: mapNameTopicToSlug[Topic.FOOD],
  },
  {
    id: 17,
    name: Topic.CAR,
    slug: mapNameTopicToSlug[Topic.CAR],
  },
  {
    id: 18,
    name: Topic.MOVIE,
    slug: mapNameTopicToSlug[Topic.MOVIE],
  },
  {
    id: 19,
    name: Topic.MUSIC,
    slug: mapNameTopicToSlug[Topic.MUSIC],
  },
  {
    id: 20,
    name: Topic.BOOK,
    slug: mapNameTopicToSlug[Topic.BOOK],
  },
];
export const CACHE_DATA_STALE_TIME = {
  SHORT: 3 * 60 * 1000,
  MEDIUM: 5 * 60 * 1000,
};
