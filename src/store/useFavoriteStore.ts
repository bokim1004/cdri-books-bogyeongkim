import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { documentType } from "../types/search";

interface FavoriteState {
  likedBooks: Record<string, documentType>;
  toggleLikeHeart: (book: documentType) => void;
}

const STORAGE_KEY = "favoriteBooks";

/** 찜하기 상태 저장소 */

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      likedBooks: {},
      toggleLikeHeart: (book: documentType) =>
        set((state) => {
          //이미 찜한 책인 경우
          const isLiked = !!state.likedBooks[book.isbn];
          if (isLiked) {
            const updated = { ...state.likedBooks };
            delete updated[book.isbn];
            return {
              likedBooks: updated,
            };
          } else {
            return { likedBooks: { ...state.likedBooks, [book.isbn]: book } };
          }
        }),
    }),
    {
      name: STORAGE_KEY,
    }
  )
);
