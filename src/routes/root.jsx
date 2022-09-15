import {
  Outlet,
  NavLink,
  Link,
  useLoaderData,
  Form,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { useEffect } from "react";
import { getCharacters, createCharacter } from "../characters";
import localforage from "localforage";

async function getCharactersFromAPI() {
  const data = await fetch('http://stapi.co/api/v1/rest/character/search');
  return data;
}

getCharactersFromAPI().then((resp) => {
  resp.json().then((resp) => {
    saveDataToDb(resp.characters);
  })
}).catch((error) => console.log(err))

function saveDataToDb (data) {
  localforage.setItem('characters',  data).then(() => {
    console.log(`Characters are added to the database`);
  })
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const characters = await getCharacters(q);
  return { characters, q };
}

export async function action() {
  await createCharacter();
}

export default function Root() {
  const { characters, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>The Star Trek Library</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search Star Trek Universe"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                // submit(event.currentTarget.form);
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form id="submit-form" method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {characters.length ? (
            <ul>
              {characters.map((character) => (
                <li key={character.id}>
                  <NavLink
                    to={`characters/${character.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    <Link to={`characters/${character.id}`}>
                      {character.first || character.last ? (
                        <>
                          {character.first} {character.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {character.favorite && <span>★</span>}
                    </Link>
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No characters</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
