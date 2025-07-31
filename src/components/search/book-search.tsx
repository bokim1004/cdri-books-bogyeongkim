import SearchInput from "../common/search-input";

function BookSearch() {
  return (
    <div className="flex flex-col  items-start space-y-4 w-full max-w-xl mx-auto">
      <h1 className="text-title2 text-textTitle font-bold font-title2">
        도서 검색
      </h1>
      <div className="flex items-center space-x-4 w-full">
        <SearchInput />
        <button className="text-textSubtitle text-body2 font-medium p-[5px 10px] w-[72px] h-[35px] border border-textSubtitle rounded-lg">
          상세검색
        </button>
      </div>
      <div className="flex flex-row font-medium text-textPrimary text-caption gap-3 pt-2">
        <p>도서 검색 결과</p>
        <p>
          총 <span className="text-primary">0</span>건
        </p>
      </div>
    </div>
  );
}

export default BookSearch;
