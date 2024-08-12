import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { TTodo } from "../lib/types";

type TodoItemProps = {
  todo: TTodo;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
};

export default function TodoItem({
  todo,
  onToggleTodo,
  onDeleteTodo,
}: TodoItemProps) {
  return (
    <section className="flex gap-3 border-b border-[#E3E4F1] dark:border-[#393A4B] items-center p-4 w-full group">
      <button onClick={() => onToggleTodo(todo.id)}>
        {todo.isActive && (
          <GoCircle className="text-[#E3E4F1] dark:text-[#393A4B]" size="22" />
        )}

        {!todo.isActive && (
          <GoCheckCircleFill className="text-[#C058F3]" size="22" />
        )}
      </button>

      <p
        className={`grow ${
          todo.isActive
            ? "dark:text-[#C8CBE7]"
            : "text-[#D1D2DA] dark:text-[#4D5067] line-through"
        }`}
      >
        {todo.text}
      </p>

      <button
        className="invisible group-hover:visible"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteTodo(todo.id);
        }}
      >
        <RxCross1 size="22" />
      </button>
    </section>
  );
}
