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
  const data = await fetch("https://stapi.co/api/v1/rest/character/search", {
    headers: {
      accept: "*/*",
      "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/x-www-form-urlencoded",
      Referer: "https://stapi.co/api-browser",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: "title=pi&name=pi",
    method: "POST",
  });
  return data;
}

fetch("https://stapi.co/api/v1/rest/character/search", {
  headers: {
    accept: "*/*",
    "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    Referer: "https://stapi.co/api-browser",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: "title=rixx&name=rixx",
  method: "POST",
});

function saveDataToDb(data) {
  localforage.setItem("characters", data).then(() => {
    console.log(`Characters are added to the database`);
  });
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
    getCharactersFromAPI()
      .then((resp) => {
        resp.json().then((resp) => {
          saveDataToDb(resp.characters);
        });
      })
      .catch((error) => console.log(err));
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
            <ul className="characterList">
              {characters.map((character) => (
                <li key={character.uid} data-testid={character.uid}>
                  <NavLink
                    to={`characters/${character.uid}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    <Link to={`characters/${character.uid}`}>
                      {character.name ? (
                        <>{character.name}</>
                      ) : (
                        <i>New entry</i>
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
