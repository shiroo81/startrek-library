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
        <img key={character.avatar} src={character.avatar || null} />
      </div>

      <div>
        <h1>
          {character.first || character.last ? (
            <>
              {character.first} {character.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite character={character} />
        </h1>

        {character.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${character.twitter}`}
            >
              {character.twitter}
            </a>
          </p>
        )}

        {character.notes && <p>{character.notes}</p>}

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
            <button type="submit">Delete</button>
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
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
      </fetcher.Form>
  );
}
