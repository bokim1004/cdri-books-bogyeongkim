import type { documentType } from "../../types/search";

interface Props {
  book: documentType;
}
/** [상세버튼 클릭 시] 도서 상세 */
function BookDetail(props: Props) {
  const { book } = props;
  return (
    <>
      <div className={`flex flex-col  my-5 w-[360px] gap-2`}>
        <div className="flex w-130 p-2 pl-6">
          <p className="font-bold text-title3 text-textPrimary">{book.title}</p>
          <p className="pl-3 text-textSecondary">{book.authors}</p>
        </div>

        <div className="text-textPrimary text-left pl-6">
          <p className="font-bold text-body2 ">책소개</p>
          <div className="font-medium text-xsmall pt-4">{book.contents}...</div>
        </div>
      </div>
      <div className="absolute right-7 bottom-30 flex flex-col items-end gap-1">
        <div className="text-sm text-gray-500">
          원가{" "}
          <span className="line-through text-gray-500">
            {book.price.toLocaleString()}원
          </span>
        </div>

        <div className="text-sm text-gray-500">
          할인가{" "}
          <span className="text-lg font-bold text-gray-800">
            {book.sale_price.toLocaleString()}원
          </span>
        </div>
      </div>{" "}
    </>
  );
}

export default BookDetail;
