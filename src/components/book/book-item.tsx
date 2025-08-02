/** 도서 아이템 */

import type { documentType } from "../../types/search";

interface Props {
  book: documentType;
}

function BookItem(Props: Props) {
  const { book } = Props;

  return (
    <>
      <div className="flex w-130 p-2 pl-6">
        <p className="font-bold text-title3 text-textPrimary">{book.title}</p>
        <p className="pl-3 text-textSecondary">{book.authors}</p>
      </div>
      <p className=" flex w-[80px] items-center text-title3 text-textPrimary font-bold">
        {book.price.toLocaleString()}원
      </p>
    </>
  );
}

export default BookItem;
