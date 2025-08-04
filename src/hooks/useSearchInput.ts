import { useCallback, useState } from "react";
import { useSearchHistoryStore } from "../store/useSearchHistoryStore";
import { useSearchStore } from "../store/useSearchStore";

/** 검색 입력 hook */
export const useSearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  const { setQuery, inputValue, setInputValue, setDetailInputValue } =
    useSearchStore();

  const { addSearchHistory, removeSearchHistory, searchHistory } =
    useSearchHistoryStore();

  const handleSubmitClick = useCallback(() => {
    addSearchHistory(inputValue);
    setQuery(inputValue);

    setIsFocused(false);
    setDetailInputValue("");
  }, [inputValue, setQuery, addSearchHistory, setDetailInputValue]);

  const handleHistoryClick = useCallback(
    (term: string) => {
      setInputValue(term);
      setQuery(term);
    },
    [setInputValue, setQuery]
  );

  const handleDeleteClick = useCallback(
    (term: string) => {
      removeSearchHistory(term);
    },
    [removeSearchHistory]
  );
  return {
    isFocused,
    setIsFocused,
    inputValue,
    searchHistory,
    handleSubmitClick,
    handleHistoryClick,
    handleDeleteClick,
    setInputValue,
  };
};
