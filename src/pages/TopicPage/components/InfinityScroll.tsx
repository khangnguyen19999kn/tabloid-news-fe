import { useGetNewsWithPagination } from "@/Services/api/news/useGetNewsWithPagination";
import { convertNewsToBigCard } from "@/Services/const/utils";
import Card from "@/common/Card/Card";
import { TNews } from "@/types";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
export default function InfinityScroll() {
  const { topicSlug } = useParams();
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState<TNews[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data: dataNewsPagination } = useGetNewsWithPagination(
    topicSlug || "",
    page,
    20,
  );

  useEffect(() => {
    if (dataNewsPagination?.data) {
      setAllData((prevData) => [...prevData, ...dataNewsPagination.data]);
      if (page >= dataNewsPagination?.totalPages) {
        setHasMore(false);
      }
    }
  }, [dataNewsPagination, page]);

  const fetchData = () => {
    setPage((oldPage) => oldPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={dataNewsPagination?.data?.length || 0}
      next={fetchData}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      scrollThreshold={0.5}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div>
        <ul>
          {allData.map((item) => (
            <li key={item.id}>
              <Card dataCard={convertNewsToBigCard(item)} key={item.id} />
            </li>
          ))}
        </ul>
        {/* {isLoadingNewsPagination && <p>Loading...</p>} */}
        {/* Thêm UI loading tùy ý */}
      </div>
    </InfiniteScroll>
  );
}
