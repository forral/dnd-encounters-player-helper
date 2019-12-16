console.log("connected");

let party = [
  {
    name: "cenas",
    avatar: "",
    isEnemy: false,
    hp: 10,
    damageDone: 0,
    iniciative: 0
  },
  {
    name: "cenas",
    avatar: "",
    isEnemy: false,
    hp: 10,
    damageDone: 0,
    iniciative: 0
  },
  {
    name: "cenas",
    avatar: "",
    isEnemy: false,
    hp: 10,
    damageDone: 0,
    iniciative: 0
  },
  {
    name: "cenas",
    avatar: "",
    isEnemy: false,
    hp: 10,
    damageDone: 0,
    iniciative: 0
  },
  {
    name: "cenas",
    avatar: "",
    isEnemy: false,
    hp: 10,
    damageDone: 0,
    iniciative: 0
  }
];

let enemies = [
  { avatar: "", isEnemy: true, damageTaken: 0, possibleAC: 0, iniciative: 0 },
  { avatar: "", isEnemy: true, damageTaken: 0, possibleAC: 0, iniciative: 0 },
  { avatar: "", isEnemy: true, damageTaken: 0, possibleAC: 0, iniciative: 0 },
  { avatar: "", isEnemy: true, damageTaken: 0, possibleAC: 0, iniciative: 0 }
];

let partyUListElement = document.querySelector(".party-list");

function createCharacterElement(character) {
  let liElement = document.createElement("li");
  liElement.classList.add("character");

  let charContainerElement = document.createElement("div");
  charContainerElement.classList.add("character-container");

  let charDetailsElement = document.createElement("div");
  charDetailsElement.classList.add("character-details");

  let avatarElement = document.createElement("img");
  let nameElement = document.createElement("p");

  let initiativeContainerElement = document.createElement("div");
  initiativeContainerElement.classList.add("initiative-container");

  let initiativeCounterElement = document.createElement("span");
  let initiativeValue = document.createTextNode(`${character.iniciative}`);
  initiativeCounterElement.appendChild(initiativeValue);

  initiativeContainerElement.appendChild(initiativeCounterElement);

  let nameValue = document.createTextNode(`${character.name}`);
  nameElement.appendChild(nameValue);

  avatarElement.src = `${character.avatar}`;

  charDetailsElement.appendChild(avatarElement);
  charDetailsElement.appendChild(nameElement);

  charContainerElement.appendChild(charDetailsElement);
  charContainerElement.appendChild(initiativeContainerElement);

  liElement.appendChild(charContainerElement);

  return liElement;
}
