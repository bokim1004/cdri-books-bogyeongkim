import { create } from "zustand";

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
  likedBooks: Record<string, boolean>;
  toggleLikeHeart: (id: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
  likedBooks: {},
  toggleLikeHeart: (id) =>
    set((state) => ({
      likedBooks: {
        ...state.likedBooks,
        [id]: !state.likedBooks[id],
      },
    })),
}));
