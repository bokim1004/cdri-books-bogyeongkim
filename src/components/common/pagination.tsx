import Button from "./button";

interface PaginationProps {
  page: number;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Pagination(props: PaginationProps) {
  const { page, onPrev, onNext, hasPrev, hasNext } = props;
  return (
    <div className="flex justify-center items-center p-10 gap-3  mx-auto">
      {hasPrev && <Button variant="simple" text="이전" onClick={onPrev} />}
      <span>현재 페이지 {page}</span>
      {hasNext && <Button variant="simple" text="다음" onClick={onNext} />}
    </div>
  );
}
