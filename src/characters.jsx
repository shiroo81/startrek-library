import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getCharacters(query) {
  await fakeNetwork(`getCharacters:${query}`);
  let characters = await localforage.getItem("characters");
  if (!characters) characters = [];
  if (query) {
    characters = matchSorter(characters, query, { keys: ["first", "last"] });
  }
  return characters.sort(sortBy("last", "createdAt"));
}

export async function createCharacter() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let uid, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, placeOfBirth, yearOfDeath, monthOfDeath, dayOfDeath, placeOfDeath, height, weight, deceased, bloodType, maritalStatus, serialNumber, hologramActivationDate, hologramStatus, hologramDateStatus, hologram, fictionalCharacter, mirror, alternateReality;
  // let character = { id, createdAt: Date.now() };
      let character = {id, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, placeOfBirth, yearOfDeath, monthOfDeath, dayOfDeath, placeOfDeath, height, weight, deceased, bloodType, maritalStatus, serialNumber, hologramActivationDate, hologramStatus, hologramDateStatus, hologram, fictionalCharacter, mirror, alternateReality};
  let characters = await getCharacters();
  characters.unshift(character);
  await set(characters);
  return character;
}

export async function getCharacter(id) {
  await fakeNetwork(`character:${id}`);
  let characters = await localforage.getItem("characters");
  let character = characters.find((character) => character.id === id);
  return character ?? null;
}

export async function updateCharacter(id, updates) {
  await fakeNetwork();
  let characters = await localforage.getItem("characters");
  let character = characters.find((character) => character.id === id);
  if (!character) throw new Error("No character found for", id);
  Object.assign(character, updates);
  await set(characters);
  return character;
}

export async function deleteCharacter(id) {
  let characters = await localforage.getItem("characters");
  let index = characters.findIndex((character) => character.id === id);
  if (index > -1) {
    characters.splice(index, 1);
    await set(characters);
    return true;
  }
  return false;
}

function set(characters) {
  return localforage.setItem("characters", characters);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
