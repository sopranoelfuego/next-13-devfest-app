import createTodo from "../actions/createTodo";

const CreateTodo = () => {
  return (
    <div className="w-[20rem]  p-2">
      <form action={createTodo} className="w-full flex flex-col gap-2">
        <input
          type="text"
          name="title"
          placeholder="title:homework"
          className="w-full border rounded p-3"
        />
        <button className="w-full bg-blue-400 hover:bg-blue-500 transition-all duration-[400ms] rounded text-white text-base">
          submit
        </button>
      </form>
    </div>
  );
};
export default CreateTodo;
