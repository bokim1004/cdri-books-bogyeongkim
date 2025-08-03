import Book from "../components/common/book";
import { useBookToggle } from "../hooks/useBookToggle";

function FavoritePage() {
  const { bookId, likedBooks, handleToggleLike, handleToggleOpen } =
    useBookToggle();

  const count = Object.keys(likedBooks).length;
  const likedBookList = Object.values(likedBooks);

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
      {likedBookList?.map((book) => {
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
    </div>
  );
}

export default FavoritePage;
