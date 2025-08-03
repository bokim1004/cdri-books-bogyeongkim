import { create } from "zustand";

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
}

/**query - 검색어 상태 저장소 */

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
}));
