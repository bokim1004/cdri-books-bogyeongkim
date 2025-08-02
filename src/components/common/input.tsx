import searchIcon from "@/assets/images/searchIcon.svg";

interface inputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
}

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
