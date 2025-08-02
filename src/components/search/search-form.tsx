/**상세 검색 팝업 form */

import { useState } from "react";

interface searchFrom {
  inputValue: string;
  setInputValue: (e: string) => void;
}

function SearchForm(props: searchFrom) {
  const { inputValue, setInputValue } = props;

  const [searchType, setSearchType] = useState<string>("제목");

  const options = ["제목", "저자명", "출판사"];

  return (
    <div className="pb-3">
      <div className="relative flex items-center gap-2 ">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border-b border-gray focus:outline-none  font-bold text-textPrimary text-body2 px-3 py-2"
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="absolute bottom-0">
              {opt}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="검색어 입력"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 border-b p-2 text-textSubtitle text-body2 border-primary"
        />
      </div>
    </div>
  );
}
export default SearchForm;
