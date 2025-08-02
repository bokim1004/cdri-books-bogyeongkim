import { useState } from "react";
import type { searchData } from "../../types/search";
import Button from "../common/button";
import NoSearchView from "../search/no-searchview";
import BookDetail from "./book-detail";
import BookItem from "./book-item";

import defaultHeart from "@/assets/images/defaultLove.svg";
import redHeart from "@/assets/images/redLove.svg";
import { useSearchStore } from "../../store/useSearchStore";
interface BookInfoProps {
  data: searchData;
}

/** 도서 검색 결과 리스트 */

function BookInfo(props: BookInfoProps) {
  const { data } = props;

  const [bookId, setBookId] = useState<string>("");

  const handleToggle = (id: string) => {
    setBookId((prev) => (prev === id ? "" : id));
  };

  const { likedBooks, toggleLikeHeart } = useSearchStore();

  return (
    <div className="flex flex-col w-full mt-10  ">
      {data?.documents?.length > 0 ? (
        data?.documents?.map((book) => {
          const isOpen = bookId === book.isbn;
          const isLiked = likedBooks[book.isbn];

          return (
            <div
              key={book?.isbn}
              className={`relative flex w-full max-w-[962px] border-b  p-4 border-gray-200 py-4 ${
                isOpen ? "items-start" : "items-center"
              }`}
            >
              <div className="relative ">
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className={`${
                    isOpen ? "w-[210px] h-[280px]" : "w-[48px] h-[68px]"
                  }`}
                />
                <img
                  src={isLiked ? redHeart : defaultHeart}
                  alt="heart"
                  className={`absolute right-0 top-0.5 ${
                    isOpen ? "w-6 h-6" : "w-4 h-4"
                  }`}
                  onClick={() => toggleLikeHeart(book.isbn)}
                />
              </div>
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
