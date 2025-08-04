import { useCallback } from "react";
import { useSearchHistoryStore } from "../../store/useSearchHistoryStore";
import { useSearchStore } from "../../store/useSearchStore";
import type { searchData } from "../../types/search";
import Modal from "../common/modal";
import SearchForm from "./search-form";
import SearchInput from "./search-input";

interface BookInfoProps {
  data: searchData;
}

// 도서 검색 컴포넌트
function BookSearch({ data }: BookInfoProps) {
  const {
    setQuery,
    isModalOpen,
    setIsModalOpen,
    detailInputValue,
    setDetailInputValue,
    setInputValue,
  } = useSearchStore();
  const { addSearchHistory } = useSearchHistoryStore();

  const handleSearch = useCallback(() => {
    setQuery(detailInputValue);
    addSearchHistory(detailInputValue);
    setIsModalOpen(false);
    setInputValue("");
  }, [
    detailInputValue,
    setQuery,
    addSearchHistory,
    setIsModalOpen,
    setInputValue,
  ]);

  return (
    <>
      <div className="flex flex-col  items-start space-y-4 w-full max-w-xl">
        <h1 className="text-title2 text-textTitle font-bold font-title2">
          도서 검색
        </h1>
        <div className="relative flex-col gap-4 w-full ">
          <div className="flex gap-4">
            <SearchInput />
            <button
              className="text-textSubtitle text-body2 mt-2 font-medium p-[5px 10px] w-[72px] h-[35px] border border-textSubtitle rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              상세검색
            </button>
          </div>
          {isModalOpen && (
            <div className="absolute -right-40 z-10 ">
              <Modal
                isOpen={isModalOpen}
                btnText={"검색하기"}
                onClose={() => setIsModalOpen(false)}
                onSearch={handleSearch}
              >
                <SearchForm
                  inputValue={detailInputValue}
                  setInputValue={setDetailInputValue}
                />
              </Modal>
            </div>
          )}
        </div>

        <div className="flex flex-row font-medium text-textPrimary text-caption gap-3 pt-2">
          <p>도서 검색 결과</p>
          <p>
            총{" "}
            <span className="text-primary">
              {data?.meta?.pageable_count ?? 0}
            </span>
            건
          </p>
        </div>
      </div>
    </>
  );
}

export default BookSearch;
