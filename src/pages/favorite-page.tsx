import { useState } from "react";
import Book from "../components/common/book";
import Pagination from "../components/common/pagination";
import { useBookToggle } from "../hooks/useBookToggle";

function FavoritePage() {
  const { bookId, likedBooks, handleToggleLike, handleToggleOpen } =
    useBookToggle();

  const count = Object.keys(likedBooks).length;
  const likedBookList = Object.values(likedBooks);

  const [page, setPage] = useState(1);
  const ITEMS_ONE_PAGE = 10;
  const totalPageNumber = Math.ceil(likedBookList.length / ITEMS_ONE_PAGE);
  const startIndex = (page - 1) * ITEMS_ONE_PAGE;
  const endIndex = startIndex + ITEMS_ONE_PAGE;
  const currentBookList = likedBookList.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col  h-screen font-display  pt-20 items-start mx-44">
      <div className="flex flex-col items-start gap-2">
        <p className="text-textTitle font-bold text-title2">내가 찜한 책</p>
        <div className="flex gap-5 text-textPrimary text-caption font-medium">
          찜한 책
          <p>
            총 <span className="text-primary">{count}</span>건
          </p>
        </div>
      </div>
      {currentBookList?.map((book) => {
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
      })}
      <Pagination
        page={page}
        onPrev={() => setPage((prev) => Math.max(prev - 1, 1))}
        onNext={() => setPage((prev) => prev + 1)}
        hasPrev={page > 1}
        hasNext={page < totalPageNumber}
      />
    </div>
  );
}

export default FavoritePage;
