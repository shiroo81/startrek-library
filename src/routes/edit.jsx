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
          placeholder="Jean-Luc Picard"
          aria-label="Name"
          type="text"
          name="name"
          defaultValue={character.name}
          data-testid="inputName"
        />
      </p>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          type="text"
          name="avatar"
          defaultValue={character.avatar}
          data-testid="inputAvatar"
        />
      </label>
      <p>
        <label>
          <span>Gender</span>
          <input type="text" name="gender" defaultValue={character.gender} data-testid="inputGender"
/>
        </label>
      </p>
      <p>
        <label>
          <span>YearOfBirth</span>
          <input
            type="text"
            name="yearOfBirth"
            defaultValue={character.yearOfBirth}
            data-testid="inputyearOfBirth"
          />{" "}
        </label>
      </p>
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
