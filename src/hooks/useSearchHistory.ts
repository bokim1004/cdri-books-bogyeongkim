import { useEffect, useState } from "react";

const STORAGE_KEY = "searchHistory";
const MAX_HISTORY = 8;

export const useSearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // 맨처음 로딩
  useEffect(() => {
    const storedHistory = localStorage.getItem(STORAGE_KEY);
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  // 검색 기록 저장하기

  const saveSearchHistory = (items: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setSearchHistory(items);
  };

  // 검색어 추가
  const addSearchTerm = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    const filteredHistory = searchHistory.filter((item) => item !== trimmed);
    const newHistory = [trimmed, ...filteredHistory].slice(0, MAX_HISTORY);
    saveSearchHistory(newHistory);
  };

  // 검색어 삭제
  const removeSearchTerm = (query: string) => {
    const filteredHistory = searchHistory.filter((item) => item !== query);
    saveSearchHistory(filteredHistory);
  };

  //검색어 전체 삭제
  const clearSearchHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSearchHistory([]);
  };

  return {
    searchHistory,
    addSearchTerm,
    removeSearchTerm,
    clearSearchHistory,
  };
};
