type FilterButtonProps = {
  text: string;
  onClick: () => void;
  isActive: boolean;
};

export default function FilterButton({
  text,
  onClick,
  isActive,
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "text-[#3A7CFD]" : "text-[#9495A5] dark:text-[#5B5E7E]"
      }`}
    >
      {text}
    </button>
  );
}
