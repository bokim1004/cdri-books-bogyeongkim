import book from "@/assets/book.svg";

function NoSearchView() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img src={book} alt="No Search Results" className="w-20 h-20" />
      <div className="text-caption font-medium text-textSecondary pt-6">
        검색 결과가 없습니다.
      </div>
    </div>
  );
}

export default NoSearchView;
