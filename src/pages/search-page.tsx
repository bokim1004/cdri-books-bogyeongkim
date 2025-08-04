import { useState } from "react";
import BookInfo from "../components/book/book-info";
import BookSearch from "../components/search/book-search";

import Pagination from "../components/common/pagination";
import { useBookSearch } from "../hooks/useBookSearch";
import { useSearchStore } from "../store/useSearchStore";

function SearchPage() {
  const [page, setPage] = useState(1);

  const { query, setIsModalOpen, isModalOpen } = useSearchStore();
  const { data } = useBookSearch(query, page);

  const hasNext = !data?.meta?.is_end && (data?.documents?.length ?? 0) >= 10;

  return (
    <div className="flex flex-col  h-screen font-display mx-44">
      <div
        className=" flex flex-col  mt-20"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <BookSearch data={data} />
        <BookInfo data={data} />
      </div>
      {data?.documents.length > 0 ? (
        <Pagination
          page={page}
          onPrev={() => setPage((prev) => Math.max(prev - 1, 1))}
          onNext={() => setPage((prev) => prev + 1)}
          hasPrev={page > 1}
          hasNext={hasNext}
        />
      ) : null}
    </div>
  );
}

export default SearchPage;
