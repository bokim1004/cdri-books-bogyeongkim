import closeImg from "@/assets/images/close.svg";
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

  const { searchHistory, addSearchTerm, removeSearchTerm } = useSearchHistory();

  const handleClick = useCallback(() => {
    addSearchTerm(inputValue);
    setQuery(inputValue);
  }, [inputValue, setQuery, addSearchTerm]);

  const handleDeleteClick = (term: string) => {
    removeSearchTerm(term);
  };

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto rounded-[20px]  bg-lightgray overflow-hidden ">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSubmit={handleClick}
        placeholder="검색어를 입력하세요"
      />
      {/* 검색 기록이 있는 경우 */}
      {searchHistory.length > 0 ? (
        <div className=" flex flex-col  w-full  ">
          {searchHistory.map((term, index) => {
            return (
              <div className="flex flex-row items-center justify-between ">
                <div
                  key={index}
                  className="flex justify-baseline items-start pl-14 pt-3
               text-textSubtitle  text-caption font-medium p-2 "
                >
                  {term}
                </div>
                <img
                  src={closeImg}
                  alt="Close Icon"
                  className="w-6 h-6 mr-10 cursor-pointer"
                  onClick={() => handleDeleteClick(term)}
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default memo(SearchInput);
