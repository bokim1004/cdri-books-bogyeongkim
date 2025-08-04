import searchIcon from "@/assets/images/searchIcon.svg";

interface inputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
}

/**
 * Input 컴포넌트
 *
 * @param props - Input 컴포넌트의 props
 * @param props.value - 현재 입력 값
 * @param props.onChange - 입력 값이 변경될 때 호출되는 이벤트 핸들러
 * @param props.onSubmit - 엔터 키 입력 시 호출되는 함수
 * @param props.onFocus - 인풋이 포커스될 때 호출되는 함수
 * @param props.onBlur - 인풋 포커스가 해제될 때 호출되는 함수
 * @param props.placeholder - 인풋에 표시할 placeholder 텍스트
 * @returns
 */

export function Input({
  value,
  onChange,
  onSubmit,
  onFocus,
  onBlur,
  placeholder = "검색어를 입력하세요",
}: inputProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSubmit) {
      onSubmit(value);
    }
  };

  const handleClick = () => {
    if (onSubmit) {
      onSubmit(value);
    }
  };

  return (
    <div className="flex items-center  w-[480px] h-[50px] p-[10px] bg-lightgray rounded-[100px]">
      <img src={searchIcon} onClick={handleClick} alt="Search Icon" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-1/2 px-4 py-5 focus:outline-none focus:ring-0 text-textSubtitle text-caption font-medium"
      />
    </div>
  );
}
