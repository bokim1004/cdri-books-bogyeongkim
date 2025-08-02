interface Props {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

function Button({ text, onClick, variant = "primary" }: Props) {
  const baseStyles =
    "w-[115px] h-[48px] px-5 py-3 rounded-lg font-medium text-caption focus:outline-none";
  const primaryStyles = "bg-primary text-white ";
  const secondaryStyles = "bg-lightgray text-textSecondary ";

  const buttonStyles = variant === "primary" ? primaryStyles : secondaryStyles;

  return (
    <button className={`${baseStyles} ${buttonStyles}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
