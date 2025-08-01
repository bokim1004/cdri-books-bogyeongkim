interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

function Button({ children, onClick, variant = "primary" }: Props) {
  const baseStyles =
    "px-5 py-3 rounded-lg font-medium text-caption focus:outline-none";
  const primaryStyles = "bg-primary text-white ";
  const secondaryStyles = "bg-lightgray text-textSecondary ";

  const buttonStyles = variant === "primary" ? primaryStyles : secondaryStyles;

  return (
    <button className={`${baseStyles} ${buttonStyles}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
