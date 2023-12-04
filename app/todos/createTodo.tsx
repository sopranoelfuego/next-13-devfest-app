"use client";
import { useRef, FormEvent } from "react";
const CreateTodo = () => {
  /**
"userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
 * */
  const title = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.current) {
      const newTodo = {
        userId: 1,
        title: title.current.value,
        completed: false,
      };
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
          {
            method: "POST",
            headers: { contentType: "application/json" },

            body: JSON.stringify(newTodo),
          }
        );
        const result = await response.json();
        console.log("result", result);
      } catch (err) {
        console.log("error", err);
      }
    }
  };
  return (
    <div className="w-[20rem]  p-2">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
        <input
          ref={title}
          type="text"
          name="title"
          placeholder="title:homework"
          className="w-full border rounded p-3"
        />
        <button
          type="submit"
          className="w-full bg-blue-400 hover:bg-blue-500 transition-all duration-[400ms] rounded text-white text-base"
        >
          submit
        </button>
      </form>
    </div>
  );
};
export default CreateTodo;
