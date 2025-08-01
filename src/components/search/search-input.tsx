import { memo, useCallback, useState } from "react";
import { useSearchHistory } from "../../hooks/useSearchHistory";
import { Input } from "../common/input";

interface Props {
  setQuery: (query: string) => void;
}

// 검색 입력 컴포넌트
function SearchInput(props: Props) {
  const { setQuery } = props;
  const [inputValue, setInputValue] = useState("");

  const { searchHistory, addSearchTerm } = useSearchHistory();

  console.log("searchHistory", searchHistory);

  const handleClick = useCallback(() => {
    addSearchTerm(inputValue);
    setQuery(inputValue);
  }, [inputValue, setQuery, addSearchTerm]);

  return (
    <Input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onSubmit={handleClick}
      placeholder="검색어를 입력하세요"
    />
  );
}

export default memo(SearchInput);
