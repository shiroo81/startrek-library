import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { getCharacter, updateCharacter } from "../characters";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateCharacter(params.characterId, updates);
  return redirect(`/characters/${params.characterId}`);
}

export function loader({ params }) {
  return getCharacter(params.characterId);
}

export default function Edit() {
  const character = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="Jean-Luc"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={character.first}
        />
        <input
          placeholder="Picard"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={character.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jeanlucpicard"
          defaultValue={character.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={character.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={character.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
