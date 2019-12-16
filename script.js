let party = [
  {
    name: "cenas",
    avatar: "#",
    isEnemy: false,
    hp: 10,
    damageDone: 0,
    iniciative: 0
  },
  {
    name: "cenas",
    avatar: "#",
    isEnemy: false,
    hp: 10,
    damageDone: 0,
    iniciative: 0
  },
  {
    name: "cenas",
    avatar: "#",
    isEnemy: false,
    hp: 10,
    damageDone: 0,
    iniciative: 0
  },
  {
    name: "cenas",
    avatar: "#",
    isEnemy: false,
    hp: 10,
    damageDone: 0,
    iniciative: 0
  },
  {
    name: "cenas",
    avatar: "#",
    isEnemy: false,
    hp: 10,
    damageDone: 0,
    iniciative: 0
  }
];

let enemies = [
  {
    avatar: "#",
    name: "cenas",
    isEnemy: true,
    damageTaken: 0,
    possibleAC: 0,
    iniciative: 0
  },
  {
    avatar: "#",
    name: "cenas",
    isEnemy: true,
    damageTaken: 0,
    possibleAC: 0,
    iniciative: 0
  },
  {
    avatar: "#",
    name: "cenas",
    isEnemy: true,
    damageTaken: 0,
    possibleAC: 0,
    iniciative: 0
  },
  {
    avatar: "#",
    name: "cenas",
    isEnemy: true,
    damageTaken: 0,
    possibleAC: 0,
    iniciative: 0
  }
];

function createCharacterElement(character, index) {
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
  initiativeCounterElement.classList.add("initiative-counter");
  initiativeCounterElement.dataset.indexNumber = `${index}`;
  let initiativeValue = document.createTextNode(`${character.iniciative}`);

  let initiativeInputElement = document.createElement("input");
  initiativeInputElement.classList.add("initiative-input", "hide");

  initiativeCounterElement.appendChild(initiativeValue);

  initiativeContainerElement.appendChild(initiativeCounterElement);
  initiativeContainerElement.appendChild(initiativeInputElement);

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

function addPartyList() {
  let partyUListElement = document.querySelector(".party-list");

  party.forEach(function(character, index) {
    partyUListElement.appendChild(createCharacterElement(character, index));
  });
}

function addEnemyList() {
  let enemyUListElement = document.querySelector(".enemies-list");

  enemies.forEach(function(enemies, index) {
    enemyUListElement.appendChild(createCharacterElement(enemies, index));
  });
}

function handleEventListeners() {
  const partyListContainer = document.querySelector(".party-container");
  const enemyListContainer = document.querySelector(".enemies-container");

  // Toggle span to input party list
  partyListContainer.addEventListener("dblclick", function(event) {
    if (event.target.className === "initiative-counter") {
      event.target.classList.add("hide");
      event.target.nextElementSibling.classList.remove("hide");
    }
  });

  // Toggle span to input enemies list
  enemyListContainer.addEventListener("dblclick", function(event) {
    if (event.target.className === "initiative-counter") {
      event.target.classList.add("hide");
      event.target.nextElementSibling.classList.remove("hide");
    }
  });

  enemyListContainer.addEventListener("keypress", function(event) {
    if (event.target.className === "initiative-input") {
      let key = event.which || event.keyCode;
      let inputElement = event.target;

      if (key === 13) {
        // on enter get the input value
        let inputValue = inputElement.value === "" ? 0 : inputElement.value;
        let spanElement = inputElement.previousSibling;

        // add the value in the span
        spanElement.innerHTML = inputValue;

        // toggle
        inputElement.classList.add("hide");
        spanElement.classList.remove("hide");
      }
    }
  });

  partyListContainer.addEventListener("keypress", function(event) {
    if (event.target.className === "initiative-input") {
      let key = event.which || event.keyCode;
      let inputElement = event.target;

      if (key === 13) {
        // on enter get the input value
        let inputValue = inputElement.value === "" ? 0 : inputElement.value;
        let spanElement = inputElement.previousSibling;

        // add the value in the span
        spanElement.innerHTML = inputValue;

        // toggle
        inputElement.classList.add("hide");
        spanElement.classList.remove("hide");
      }
    }
  });
}

addPartyList();
addEnemyList();
handleEventListeners();
