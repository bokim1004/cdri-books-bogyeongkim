import { useCallback, useState } from "react";
import { useFavoriteStore } from "../store/useFavoriteStore";
import type { documentType } from "../types/search";

export const useBookToggle = () => {
  const [bookId, setBookId] = useState<string>("");

  // 상세보기 토글
  const handleToggleOpen = useCallback((id: string) => {
    setBookId((prev) => (prev === id ? "" : id));
  }, []);

  // 좋아요(하트) 토글
  const { likedBooks, toggleLikeHeart } = useFavoriteStore();
  const handleToggleLike = useCallback(
    (book: documentType) => toggleLikeHeart(book),
    [toggleLikeHeart]
  );

  return {
    bookId,
    handleToggleOpen,
    likedBooks,
    handleToggleLike,
  };
};
