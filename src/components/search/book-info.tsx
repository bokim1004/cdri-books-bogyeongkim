import { useState } from "react";
import type { searchData } from "../../types/search";
import Button from "../common/button";
import NoSearchView from "./no-searchview";

interface BookInfoProps {
  data: searchData;
}

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
        data?.documents?.map((book) => (
          <div
            key={book?.isbn}
            className="flex w-full border-b  pl-7 border-gray-200 py-4"
          >
            <img
              src={book.thumbnail}
              alt={book.title}
              className="w-[48px] h-[68px]"
            />
            <div className="flex w-130 pl-10 items-center text-left">
              <p className="font-bold text-title3 text-textPrimary">
                {book.title}
              </p>
              <p className="pl-3 text-textSecondary">{book.authors}</p>
            </div>
            <p className=" flex w-[80px] items-center text-title3 text-textPrimary font-bold">
              {book.price.toLocaleString()}원
            </p>
            <div className="flex items-center pl-10 gap-3">
              <Button
                variant="primary"
                text="구매하기"
                onClick={() => window.open(book.url, "_blank")}
              />
              <Button
                variant="secondary"
                text="상세보기"
                isOpen={bookId === book.isbn}
                onClick={() => handleToggle(book.isbn)}
              />
            </div>
          </div>
        ))
      ) : (
        <NoSearchView />
      )}
    </div>
  );
}

export default BookInfo;
