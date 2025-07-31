import { useState } from "react";
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

  const handleClick = () => {
    addSearchTerm(inputValue);
    setQuery(inputValue);
  };

  return (
    <Input
      value={inputValue}
      onChange={setInputValue}
      onSubmit={handleClick}
      placeholder="검색어를 입력하세요"
    />
  );
}

export default SearchInput;
