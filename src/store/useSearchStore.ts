import { create } from "zustand";

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  detailInputValue: string;
  setDetailInputValue: (detailInputValue: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  // 검색어 상태
  query: "",
  setQuery: (query) => set({ query }),

  // 모달 상태
  isModalOpen: false,
  setIsModalOpen: (isModalOpen) => set({ isModalOpen }),

  //전체 검색창 input 상태
  inputValue: "",
  setInputValue: (inputValue) => set({ inputValue }),

  //상세검색 모달에 있는 검색 input상태
  detailInputValue: "",
  setDetailInputValue: (detailInputValue) => set({ detailInputValue }),
}));
