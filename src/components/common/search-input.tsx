import searchIcon from "@/assets/searchIcon.svg";
import { useState } from "react";
import { useSearchHistory } from "../../hooks/useSearchHistory";

interface Props {
  onSubmit: (query: string) => void;
}

// 검색 입력 컴포넌트
function SearchInput(props: Props) {
  const { onSubmit } = props;
  const [inputValue, setInputValue] = useState("");

  const { searchHistory, addSearchTerm } = useSearchHistory();

  console.log("searchHistory", searchHistory);

  const handleClick = () => {
    addSearchTerm(inputValue);
    onSubmit(inputValue);
  };

  return (
    <div className="flex items-center  w-[480px] h-[50px] p-[10px] bg-lightgray rounded-[100px]">
      <img src={searchIcon} onClick={handleClick} alt="Search Icon" />
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
        className="w-1/2 px-4 py-5 focus:outline-none focus:ring-0 text-textSubtitle text-caption font-medium"
      />
    </div>
  );
}

export default SearchInput;
