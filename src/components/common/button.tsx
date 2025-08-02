import arrowDownImg from "@/assets/images/arrowDown.svg";
import arrowUpImg from "@/assets/images/arrowUp.svg";

interface Props {
  text: string;
  isOpen?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "simple";
  className?: string;
  disabled?: boolean;
}

function Button({
  text,
  isOpen,
  onClick,
  variant = "primary",
  className,
  disabled,
}: Props) {
  const baseStyles =
    "flex items-center  justify-center w-[115px] h-[48px] px-5 py-3 rounded-lg font-medium text-caption focus:outline-none transform active:scale-95 transition";
  const primaryStyles = "bg-primary text-white ";
  const secondaryStyles = "bg-lightgray text-textSecondary ";
  const simpleStyles = "bg-white text-textSecondary border-1 ";

  const buttonStyles =
    variant === "primary"
      ? primaryStyles
      : variant === "secondary"
      ? secondaryStyles
      : simpleStyles;

  return (
    <button
      className={`${baseStyles} ${buttonStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {variant === "secondary" ? (
        <img
          src={isOpen ? arrowUpImg : arrowDownImg}
          alt="arrow"
          className="pl-1"
        />
      ) : null}
    </button>
  );
}

export default Button;
