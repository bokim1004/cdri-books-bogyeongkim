import { memo } from "react";
import { useSearchInput } from "../../hooks/useSearchInput";
import { Input } from "../common/input";
import SearchHistory from "./search-history";

// 검색 입력 컴포넌트
function SearchInput() {
  const {
    inputValue,
    setInputValue,
    isFocused,
    setIsFocused,
    searchHistory,
    handleDeleteClick,
    handleHistoryClick,
    handleSubmitClick,
  } = useSearchInput();

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto rounded-[20px]  bg-lightgray overflow-hidden ">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSubmit={handleSubmitClick}
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
