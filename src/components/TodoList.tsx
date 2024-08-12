import { useTodoContext } from "../contexts/TodoContextProvider";
import FilterButton from "./FilterButton";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const {
    todoItems,
    getFilteredTodoItems,
    onToggleTodo,
    onDeleteTodo,
    numOfActiveTodos,
    onClearCompletedTodos,
    setFilter,
    filter,
  } = useTodoContext();

  return (
    <>
      {todoItems.length > 0 && (
        <section className="bg-white dark:bg-[#25273D] rounded drop-shadow-lg">
          {getFilteredTodoItems().map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
          <div className="flex items-center justify-between p-4 text-sm">
            <p className="text-[#9495A5] dark:text-[#]">
              {numOfActiveTodos} items left
            </p>
            <div className="flex gap-3 font-semibold">
              <FilterButton
                text="All"
                isActive={filter === "all"}
                onClick={() => setFilter("all")}
              />
              <FilterButton
                text="Active"
                isActive={filter === "active"}
                onClick={() => setFilter("active")}
              />
              <FilterButton
                text="Completed"
                isActive={filter === "completed"}
                onClick={() => setFilter("completed")}
              />
            </div>
            <button onClick={onClearCompletedTodos}>Clear completed</button>
          </div>
        </section>
      )}
    </>
  );
}
