import { useState } from "react";
import BookInfo from "../components/book/book-info";
import Button from "../components/common/button";
import BookSearch from "../components/search/book-search";

import { useBookSearch } from "../hooks/useBookSearch";
import { useSearchStore } from "../store/useSearchStore";

function SearchPage() {
  const [page, setPage] = useState(0);

  const { query } = useSearchStore();
  const { data, isPlaceholderData } = useBookSearch(query, page);

  return (
    <div className="flex flex-col  h-screen font-display">
      <div className=" flex flex-col  mt-20 mx-auto  ">
        <BookSearch data={data} />
        <BookInfo data={data} />
      </div>
      {data?.documents.length > 0 ? (
        <div className="flex justify-center items-center p-10 gap-3">
          {page > 0 && (
            <Button
              variant="simple"
              text="이전"
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page === 0}
            />
          )}
          <span>현재 페이지 {page + 1}</span>
          {data?.documents.length < 10 ? null : (
            <Button
              variant="simple"
              text="다음"
              onClick={() => {
                if (!isPlaceholderData && !data?.meta?.is_end) {
                  setPage((old) => old + 1);
                }
              }}
              disabled={isPlaceholderData || data?.meta?.is_end}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}

export default SearchPage;
