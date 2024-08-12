import { createContext, useContext, useState } from "react";
import { Filter, TTodo } from "../lib/types";
import { useLocalStorage } from "../lib/hooks";

type TodoContext = {
  onAddToList: (text: string) => void;
  todoItems: TTodo[];
  getFilteredTodoItems: () => TTodo[];
  onToggleTodo: (id: number) => void;
  numOfActiveTodos: number;
  onDeleteTodo: (id: number) => void;
  onClearCompletedTodos: () => void;
  setFilter: (filter: Filter) => void;
  filter: Filter;
};

const TodoContext = createContext<TodoContext | null>(null);

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todoItems, setTodoItems] = useLocalStorage<TTodo[]>("todos", []);
  const [filter, setFilter] = useState<Filter>("all");

  const getFilteredTodoItems = () => {
    if (filter === "active") {
      return todoItems.filter((todo) => todo.isActive);
    } else if (filter === "completed") {
      return todoItems.filter((todo) => !todo.isActive);
    } else {
      return todoItems;
    }
  };
  const numOfActiveTodos = todoItems.filter((todo) => todo.isActive).length;

  const onAddToList = (text: string) => {
    const newTodoItem = {
      id: new Date().getTime(),
      text: text,
      isActive: true,
    };

    setTodoItems((prev) => [...prev, newTodoItem]);
  };

  const onToggleTodo = (id: number) => {
    setTodoItems((prev) => {
      const newArray = [...prev].map((todo) => {
        if (todo.id === id) {
          return { ...todo, isActive: !todo.isActive };
        }
        return todo;
      });

      return newArray;
    });
  };

  const onDeleteTodo = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onClearCompletedTodos = () => {
    setTodoItems((prev) => prev.filter((todo) => todo.isActive));
  };

  return (
    <TodoContext.Provider
      value={{
        onAddToList,
        todoItems,
        getFilteredTodoItems,
        onToggleTodo,
        numOfActiveTodos,
        onDeleteTodo,
        onClearCompletedTodos,
        setFilter,
        filter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      "useContext(TodoContext) must be used within a TodoContextProvider"
    );
  }

  return context;
};
