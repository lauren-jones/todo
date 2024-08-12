import { ChangeEvent, useState } from "react";
import { useTodoContext } from "../contexts/TodoContextProvider";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { onAddToList } = useTodoContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Add basic validation

    onAddToList(text);
    setText("");
  };

  return (
    <form
      className="bg-white dark:bg-[#25273D] flex gap-3 items-center p-4 rounded w-full drop-shadow-lg"
      onSubmit={handleSubmit}
    >
      <input
        className="grow outline-none bg-white dark:bg-[#25273D] dark:placeholder-[#767992]"
        placeholder="Create a new todo..."
        value={text}
        onChange={handleChange}
      />
    </form>
  );
}
