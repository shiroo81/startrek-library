import { redirect } from "react-router-dom";
import { deleteCharacter } from "../characters";

export async function action({ params }) {
  await deleteCharacter(params.characterId);
  return redirect("/");
}