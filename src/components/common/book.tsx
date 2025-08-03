import { memo } from "react";
import type { documentType } from "../../types/search";

import BookDetail from "../book/book-detail";
import BookItem from "../book/book-item";
import Button from "./button";

import defaultHeart from "@/assets/images/defaultLove.svg";
import redHeart from "@/assets/images/redLove.svg";

interface BookProps {
  book: documentType;
  isOpen: boolean;
  isLiked: documentType;
  onToggleLike: (book: documentType) => void;
  onToggleOpen: (isbn: string) => void;
}

/** 책 정보를 담은 공통 컴포넌트 */
function Book(props: BookProps) {
  const { book, isOpen, isLiked, onToggleLike, onToggleOpen } = props;

  return (
    <div
      key={book?.isbn}
      className={`relative flex w-full max-w-[962px] border-b  border-gray-200 py-4 ${
        isOpen ? "items-start" : "items-center"
      }`}
    >
      <div className="relative ">
        <img
          src={book.thumbnail}
          alt={book.title}
          className={`${isOpen ? "w-[210px] h-[280px]" : "w-[48px] h-[68px]"}`}
        />
        <img
          src={isLiked ? redHeart : defaultHeart}
          alt="heart"
          className={`absolute right-0 top-0.5 ${
            isOpen ? "w-6 h-6" : "w-4 h-4"
          }`}
          onClick={() => onToggleLike(book)}
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
          onClick={() => onToggleOpen(book.isbn)}
          className={`${isOpen ? "absolute right-4 mt-16 " : ""}`}
        />
      </div>
    </div>
  );
}

export default memo(Book);
