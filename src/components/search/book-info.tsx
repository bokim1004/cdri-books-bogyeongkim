import { useState } from "react";
import type { searchData } from "../../types/search";
import Button from "../common/button";
import BookDetail from "./book-detail";
import BookItem from "./book-item";
import NoSearchView from "./no-searchview";

interface BookInfoProps {
  data: searchData;
}

/** 도서 검색 결과 리스트 */

function BookInfo(props: BookInfoProps) {
  const { data } = props;
  console.log("BookInfo data", data);

  const [bookId, setBookId] = useState<string>("");

  const handleToggle = (id: string) => {
    setBookId((prev) => (prev === id ? "" : id));
  };
  return (
    <div className="flex flex-col w-full mt-4  ">
      {data?.documents?.length > 0 ? (
        data?.documents?.map((book) => {
          const isOpen = bookId === book.isbn;

          return (
            <div
              key={book?.isbn}
              className={`relative flex w-full max-w-[962px] border-b  p-4 border-gray-200 py-4 ${
                isOpen ? "items-start" : "items-center"
              }`}
            >
              {isOpen ? <BookDetail book={book} /> : <BookItem book={book} />}
              <div className="flex items-center pl-10 gap-3">
                <Button
                  variant="primary"
                  text="구매하기"
                  onClick={() => window.open(book.url, "_blank")}
                  className={`${
                    isOpen ? "absolute mt-4 bottom-10 right-0 w-[240px]" : ""
                  }`}
                />
                <Button
                  variant="secondary"
                  text="상세보기"
                  isOpen={isOpen}
                  onClick={() => handleToggle(book.isbn)}
                  className={`${isOpen ? "absolute right-4 mt-16 " : ""}`}
                />
              </div>
            </div>
          );
        })
      ) : (
        <NoSearchView />
      )}
    </div>
  );
}

export default BookInfo;
