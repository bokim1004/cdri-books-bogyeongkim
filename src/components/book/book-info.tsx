import type { searchData } from "../../types/search";
import NoSearchView from "../search/no-searchview";

import { useBookToggle } from "../../hooks/useBookToggle";
import Book from "../common/book";
interface BookInfoProps {
  data: searchData;
}

/** 도서 검색 결과 리스트 */

function BookInfo(props: BookInfoProps) {
  const { data } = props;
  const { bookId, likedBooks, handleToggleLike, handleToggleOpen } =
    useBookToggle();
  return (
    <div className="flex flex-col w-full mt-10  ">
      {data?.documents?.length > 0 ? (
        data?.documents?.map((book) => {
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
