import { create } from "zustand";
import type { documentType } from "../types/search";

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
  likedBooks: Record<string, documentType>;
  toggleLikeHeart: (book: documentType) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
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
}));
