import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchHistoryState {
  searchHistory: string[];
  addSearchHistory: (term: string) => void;
  removeSearchHistory: (term: string) => void;
  clearSearchHistory: () => void;
}

const STORAGE_KEY = "searchHistory";
const MAX_HISTORY = 8;

/** 검색 기록 상태 저장소  */

export const useSearchHistoryStore = create<SearchHistoryState>()(
  persist(
    (set) => ({
      searchHistory: [],

      //검색어 기록 추가
      addSearchHistory: (term) =>
        set((state) => {
          const filteredHistory = state.searchHistory.filter(
            (item) => item !== term
          );
          return {
            searchHistory: [term, ...filteredHistory].slice(0, MAX_HISTORY),
          };
        }),
      //검색어 기록 삭제
      removeSearchHistory: (term) =>
        set((state) => ({
          searchHistory: state.searchHistory.filter((item) => item !== term),
        })),

      //검색어 기록 전체 삭제
      clearSearchHistory: () =>
        set({
          searchHistory: [],
        }),
    }),
    {
      name: STORAGE_KEY,
    }
  )
);
