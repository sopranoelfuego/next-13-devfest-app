// "use client";
// import { useRef, FormEvent } from "react";
const CreateTodo = () => {
  /**
  "createdAt": "2023-12-04T15:23:20.978Z",
    "title": "Joshua Hintz",
    "id": "1"
 * */

  // const title = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: FormData) => {
    "use server";
    const title = e.get("title")?.toString();
    if (!title) return null;

    const newTodo = {
      title: title,
    };
    try {
      const response = await fetch(
        "https://656f2b6d6529ec1c62377a9a.mockapi.io/api/todos",
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
  };
  return (
    <div className="w-[20rem]  p-2">
      <form action={handleSubmit} className="w-full flex flex-col gap-2">
        <input
          // ref={title}
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
