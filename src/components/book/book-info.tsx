import { useCallback, useState } from "react";
import type { documentType, searchData } from "../../types/search";
import NoSearchView from "../search/no-searchview";

import { useSearchStore } from "../../store/useSearchStore";
import Book from "../common/book";
interface BookInfoProps {
  data: searchData;
}

/** 도서 검색 결과 리스트 */

function BookInfo(props: BookInfoProps) {
  const { data } = props;

  const [bookId, setBookId] = useState<string>("");

  const handleToggleOpen = useCallback((id: string) => {
    setBookId((prev) => (prev === id ? "" : id));
  }, []);

  const { likedBooks, toggleLikeHeart } = useSearchStore();

  const handleToggleLike = useCallback(
    (book: documentType) => toggleLikeHeart(book),
    [toggleLikeHeart]
  );

  return (
    <div className="flex flex-col w-full mt-10  ">
      {data?.documents?.length > 0 ? (
        data?.documents?.map((book) => {
          console.log("book", book);
          const isOpen = bookId === book.isbn;
          const likedBookList = likedBooks[book.isbn];

          return (
            <Book
              book={book}
              isOpen={isOpen}
              isLiked={likedBookList}
              onToggleLike={handleToggleLike}
              onToggleOpen={handleToggleOpen}
            />
          );
        })
      ) : (
        <NoSearchView />
      )}
    </div>
  );
}

export default BookInfo;
