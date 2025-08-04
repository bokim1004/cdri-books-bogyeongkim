import { memo, useCallback, useState } from "react";
import { useSearchHistoryStore } from "../../store/useSearchHistoryStore";
import { useSearchStore } from "../../store/useSearchStore";
import { Input } from "../common/input";
import SearchHistory from "./search-history";

// 검색 입력 컴포넌트
function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);

  const { setQuery, inputValue, setInputValue, setDetailInputValue } =
    useSearchStore();

  const { addSearchHistory, removeSearchHistory, searchHistory } =
    useSearchHistoryStore();

  const handleClick = useCallback(() => {
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

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto rounded-[20px]  bg-lightgray overflow-hidden ">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSubmit={handleClick}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="검색어를 입력하세요"
      />
      {/* 검색 기록이 있는 경우 */}
      {isFocused && !inputValue && searchHistory.length > 0 ? (
        <div className=" flex flex-col  w-full ">
          {searchHistory?.map((term) => {
            return (
              <SearchHistory
                term={term}
                handleDeleteClick={handleDeleteClick}
                handleHistoryClick={handleHistoryClick}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default memo(SearchInput);
