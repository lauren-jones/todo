import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-[#494C6B] dark:text-[#C8CBE7] gap-8 items-center dark:bg-[#171823] bg-[#9687F5] p-5">
      <Header />
      <main className="flex flex-col gap-5 w-full max-w-[540px]">
        <TodoForm />
        <TodoList />
      </main>
      <footer>
        <p className="text-xs dark:text-[#5B5E7E]">
          Drag and drop to reorder list
        </p>
      </footer>
    </div>
  );
}

export default App;
