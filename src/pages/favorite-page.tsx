import Book from "../components/common/book";
import Pagination from "../components/common/pagination";
import { useBookToggle } from "../hooks/useBookToggle";
import { usePagination } from "../hooks/usePagination";

function FavoritePage() {
  const { bookId, likedBooks, handleToggleLike, handleToggleOpen } =
    useBookToggle();

  const count = Object.keys(likedBooks).length;
  const likedBookList = Object.values(likedBooks);

  const ITEMS_PER_PAGE = 10;

  const { page, setPage, totalPageNumber, currentBookList } = usePagination(
    likedBookList,
    ITEMS_PER_PAGE
  );
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
