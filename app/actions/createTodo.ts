"use server";
import { revalidatePath } from "next/cache";
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (e: FormData) {
  "use server";
  const title = e.get("title")?.toString();
  if (!title) return null;

  const newTodo = {
    title: title,
  };
  try {
    await fetch("https://656f2b6d6529ec1c62377a9a.mockapi.io/api/todos", {
      method: "POST",
      headers: { contentType: "application/json" },

      body: JSON.stringify(newTodo),
    });
    revalidatePath("/todos");
  } catch (err) {
    console.log("error", err);
  }
}
