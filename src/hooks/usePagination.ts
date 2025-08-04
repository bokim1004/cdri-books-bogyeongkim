import { useState } from "react";

export const usePagination = <T>(books: T[], itemsPerPage: number) => {
  const [page, setPage] = useState(1);
  const totalPageNumber = Math.ceil(books.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBookList = books.slice(startIndex, endIndex);

  return {
    page,
    setPage,
    totalPageNumber,
    currentBookList,
  };
};
