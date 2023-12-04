"use client";
import { useEffect, useState } from "react";
import CreateTodo from "./createTodo";
import Link from "next/link";
type TodoType = {
  userId: number;
  id: 1;
  title: string;
  completed: boolean;
};
const TodoPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  useEffect(() => {
    let unsubsriber = true;
    const init = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
          if (unsubsriber) setTodos(data);
        });
    };
    init();

    return () => {
      unsubsriber = false;
    };
  }, []);
  return (
    <div className="flex flex-col items-center w-full  justify-between ">
      <div className="mx-auto mt-4">
        <Link href="/" className="px-2 m-2 bg-sage-700">
          Home
        </Link>

        <CreateTodo />
        {/* list of todo here */}
        <h2>List of TOdos </h2>
        <ul className="opacity-70">
          {todos.slice(-10).map((t: TodoType) => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoPage;
