import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getCharacter, updateCharacter } from "./characters";

export async function loader({ params }) {
  const character = await getCharacter(params.characterId);
  if (!character) {
    throw new Response("", {
      status: 404,
      statusText: "The Character is not Found",
    });
  }
  return character;
}

export async function action({ request, params }) {
  let formData = await request.formData();
  return updateCharacter(params.characterId, {
    favorite: formData.get("favorite") === "true",
  });
}

export default function Character() {
  const character = useLoaderData();

  return (
    <div id="character">
      <div>
        <img character-form-avatar key={character.avatar} src={character.avatar || null} />
      </div>

      <div>
        <h1 id="character">
          {character.name ? <>{character.name}</> : <i>New entry</i>}{" "}
          <Favorite character={character} />
        </h1>

        {character.gender && (
          <p>
            <a>{character.gender}</a>
          </p>
        )}

        {character.yearOfBirth && <p>{character.yearOfBirth}</p>}
        {character.placeOfBirth && <p>{character.placeOfBirth}</p>}
        {character.yearOfDeath && <p>{character.yearOfDeath}</p>}
        {character.maritalStatus && <p>{character.maritalStatus}</p>}
        {character.alternateReality && <p>{character.alternateReality}</p>}
        {character.fictionalCharacter && <p>{character.fictionalCharacter}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button class="btn-delete" type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ character }) {
  const fetcher = useFetcher();
  let favorite = character.favorite;
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }
  return (
    <fetcher.Form method="post">
      <button 
        class="fav"
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
