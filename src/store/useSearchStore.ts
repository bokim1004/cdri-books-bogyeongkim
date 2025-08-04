import { create } from "zustand";

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  // 검색어 상태
  query: "",
  setQuery: (query) => set({ query }),

  // 모달 상태
  isModalOpen: false,
  setIsModalOpen: (isModalOpen) => set({ isModalOpen }),
}));
