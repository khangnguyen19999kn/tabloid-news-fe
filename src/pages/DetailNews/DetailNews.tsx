import { useGetDetailNews } from "@/Services/api/news/useGetDetailNews";
import { useGetNewsBySlugTopic } from "@/Services/api/news/useGetNewsBySlugTopic";
import { mapSlugToTopic } from "@/Services/const/map";
import Loading from "@/common/Loading/Loading";
import { Skeleton } from "@mantine/core";
import dayjs from "dayjs";
import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

const SectionRecommend = React.lazy(
  () => import("./components/SectionRecommend"),
);
export default function DetailNews() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading } = useGetDetailNews(slug || "");
  const { data: dataRecommend } = useGetNewsBySlugTopic(
    data?.[0].slugTopic || "",
    6,
  );
  console.log(dataRecommend);
  if (!data) return <Loading isLoading />;
  const { topic, title, author, createdAt, description, content } = data[0];
  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="text-center">
        <h3 className="text-xl text-gray-400 mb-3">{mapSlugToTopic[topic]}</h3>
        <h1 className=" text-5xl font-bold mb-3">{title}</h1>
        <div className="flex justify-center mb-3">
          <p className="text-sm font-semibold mr-2">{author}</p>
          <p>-</p>
          <p className="ml-2 text-sm text-gray-300">
            {dayjs(createdAt).format("DD/MM/YYYY")}
          </p>
        </div>
        <h2 className="text-lg font-semibold mb-5">{description}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className="mt-8">
          <Suspense fallback={<Skeleton />}>
            <SectionRecommend data={dataRecommend} />
          </Suspense>
          {/* <SectionRecommend data={dataRecommend} /> */}
        </div>
      </div>
    </>
  );
}
