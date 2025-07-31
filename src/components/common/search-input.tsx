import searchIcon from "@/assets/searchIcon.svg";

function SearchInput() {
  return (
    <div className="flex items-center  w-[480px] h-[50px] p-[10px] bg-lightgray rounded-[100px]">
      <img src={searchIcon} alt="Search Icon" />
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className="w-1/2 px-4 py-5 focus:outline-none focus:ring-0 text-textSubtitle text-caption font-medium"
      />
    </div>
  );
}

export default SearchInput;
