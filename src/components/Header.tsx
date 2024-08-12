import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="flex justify-between w-full max-w-[540px]">
      <h1 className="text-white uppercase font-semibold text-4xl tracking-widest">
        Todo
      </h1>
      <DarkModeToggle />
    </header>
  );
}
