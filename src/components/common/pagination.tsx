import Button from "./button";

interface PaginationProps {
  page: number;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

/**
 * Pagination 컴포넌트
 *
 * @param props - Pagination 컴포넌트의 props
 * @param props.page - 현재 페이지 번호 (1부터 시작)
 * @param props.onPrev - 이전 페이지 버튼 클릭 시 호출되는 함수
 * @param props.onNext - 다음 페이지 버튼 클릭 시 호출되는 함수
 * @param props.hasPrev - 이전 페이지 버튼 활성화 여부
 * @param props.hasNext - 다음 페이지 버튼 활성화 여부
 * @returns
 */

function Pagination(props: PaginationProps) {
  const { page, onPrev, onNext, hasPrev, hasNext } = props;
  return (
    <div className="flex justify-center items-center p-10 gap-3  mx-auto">
      {hasPrev && <Button variant="simple" text="이전" onClick={onPrev} />}
      <span>현재 페이지 {page}</span>
      {hasNext && <Button variant="simple" text="다음" onClick={onNext} />}
    </div>
  );
}

export default Pagination;
