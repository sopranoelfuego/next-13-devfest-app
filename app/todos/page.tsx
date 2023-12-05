// "use client";
// import { useEffect, useState } from "react";
import CreateTodo from "./createTodo";
import Link from "next/link";
type TodoType = {
  createdAt: string;
  title: string;
  id?: number;
};
const getTodos = async () => {
  const response = await fetch(
    "https://656f2b6d6529ec1c62377a9a.mockapi.io/api/todos",
    { cache: "no-cache", next: { tags: ["todos"] } }
  );
  if (!response.ok) return new Error("error");
  const data = await response.json();
  return data;
};
const TodoPage = async () => {
  const todos = await getTodos();
  // console.log("todos:", todos);
  // const [todos, setTodos] = useState<TodoType[]>([]);
  // useEffect(() => {
  //   let unsubsriber = true;
  //   const init = () => {
  //     fetch("https://656f2b6d6529ec1c62377a9a.mockapi.io/api/todos")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (unsubsriber) setTodos(data);
  //       });
  //   };
  //   init();

  //   return () => {
  //     unsubsriber = false;
  //   };
  // }, []);
  const handleSubmit = async (e: FormData) => {
    const title = e.get("title")?.toString();
    if (!title) return null;

    const newTodo = {
      title: title,
    };
    await fetch("https://656f2b6d6529ec1c62377a9a.mockapi.io/api/todos", {
      method: "POST",
      headers: { contentType: "application/json" },

      body: JSON.stringify(newTodo),
    });
    // "use server";
    // const title = e.get("title")?.toString();
    // if (!title) return null;

    // const newTodo = {
    //   title: title,
    // };
    // try {
    //   await fetch("https://656f2b6d6529ec1c62377a9a.mockapi.io/api/todos", {
    //     method: "POST",
    //     headers: { contentType: "application/json" },

    //     body: JSON.stringify(newTodo),
    //   });
    //   // const result = await response.json();
    //   // console.log("result", result);
    // } catch (err) {
    //   console.log("error", err);
    // }
  };
  return (
    <div className="flex flex-col items-center w-full  justify-between ">
      <div className="mx-auto mt-4">
        <Link href="/" className="px-2 m-2 bg-sage-700">
          Home
        </Link>

        {/* <CreateTodo /> */}
        <form action={handleSubmit} className="w-full flex flex-col gap-2">
          <input
            // ref={title}
            type="text"
            name="title"
            placeholder="title:homework"
            className="w-full border rounded p-3"
          />
          <button className="w-full bg-blue-400 hover:bg-blue-500 transition-all duration-[400ms] rounded text-white text-base">
            submit
          </button>
        </form>
        {/* list of todo here */}
        <h2>List of TOdos </h2>
        <ul className="opacity-70">
          {todos.slice(-10).map((t: TodoType) => (
            <li
              key={t.id}
              className="p-3 bg-stone-200 m-1 hover:cursor-pointer hover:bg-stone-300 transition-all duration-[400ms] "
            >
              {t.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoPage;
