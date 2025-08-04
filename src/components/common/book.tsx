import { memo } from "react";
import type { documentType } from "../../types/search";

import BookDetail from "../book/book-detail";
import BookItem from "../book/book-item";
import Button from "./button";

import defaultHeart from "@/assets/images/defaultLove.svg";
import redHeart from "@/assets/images/redLove.svg";

interface BookProps {
  book: documentType;
  isDetailOpen: boolean;
  isLiked: documentType;
  onToggleLike: (book: documentType) => void;
  onToggleOpen: (isbn: string) => void;
}

/**
 *
 * @param props - Book 컴포넌트의 props
 * @param props.book - 도서 데이터
 * @param props.isDetailOpen - 도서의 상세 보기 열림 여부
 * @param props.isLiked -  도서를 찜목록에 넣었는지 여부
 * @param props.onToggleLike - 하트이미지 눌러서 찜 상태를 토글하는 함수
 * @param props.onToggleOpen - 상세 보기 열림 상태를 토글하는 함수
 * @returns
 */

/** 개별 책 정보를 담은 컴포넌트 */
function Book(props: BookProps) {
  const { book, isDetailOpen, isLiked, onToggleLike, onToggleOpen } = props;

  const BookContents = isDetailOpen ? (
    <BookDetail book={book} />
  ) : (
    <BookItem book={book} />
  );

  const thumbnailClass = isDetailOpen
    ? "w-[210px] h-[280px]"
    : "w-[48px] h-[68px]";

  const heartClass = `absolute right-0 top-0.5 ${
    isDetailOpen ? "w-6 h-6" : "w-4 h-4"
  }`;

  const handleLikeClick = () => {
    onToggleLike(book);
  };

  const handleBuyClick = () => {
    window.open(book.url, "_blank");
  };

  const handleOpenClick = () => {
    onToggleOpen(book.isbn);
  };

  return (
    <div
      key={book?.isbn}
      className={`relative flex w-full max-w-[962px] border-b  border-gray-200 py-4 ${
        isDetailOpen ? "items-start" : "items-center"
      }`}
    >
      <div className="relative ">
        <img src={book.thumbnail} alt={book.title} className={thumbnailClass} />
        <img
          src={isLiked ? redHeart : defaultHeart}
          alt="heart"
          className={heartClass}
          onClick={handleLikeClick}
        />
      </div>
      {/* 도서 정보 (간략/상세) */}
      {BookContents}
      <div className="flex items-center pl-10 gap-3">
        <Button
          variant="primary"
          text="구매하기"
          onClick={handleBuyClick}
          className={`${
            isDetailOpen ? "absolute mt-4 bottom-10 right-0 w-[240px]" : ""
          }`}
        />
        <Button
          variant="secondary"
          text="상세보기"
          isOpen={isDetailOpen}
          onClick={handleOpenClick}
          className={`${isDetailOpen ? "absolute right-4 mt-16 " : ""}`}
        />
      </div>
    </div>
  );
}

export default memo(Book);
