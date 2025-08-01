import book from "@/assets/images/book.svg";

// 검색 결과가 없는 경우에 보여줄 컴포넌트

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
