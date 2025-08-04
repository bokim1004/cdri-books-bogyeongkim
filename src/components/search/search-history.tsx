import closeImg from "@/assets/images/close.svg";

interface searchHistory {
  term: string;
  handleHistoryClick: (term: string) => void;
  handleDeleteClick: (term: string) => void;
}

/**검색 기록 컴포넌트 */

function SearchHistory(props: searchHistory) {
  const { term, handleHistoryClick, handleDeleteClick } = props;

  return (
    <div
      className="flex flex-row items-center justify-between cursor-pointer hover:bg-gray-200 "
      onMouseDown={() => handleHistoryClick(term)}
    >
      <div
        className="flex justify-baseline items-start pl-14 pt-3
   text-textSubtitle  text-caption font-medium p-2 "
      >
        {term}
      </div>
      <img
        src={closeImg}
        alt="Close Icon"
        className="w-6 h-6 mr-10 cursor-pointer "
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleDeleteClick(term);
        }}
      />
    </div>
  );
}

export default SearchHistory;
