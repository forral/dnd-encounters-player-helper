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
  { avantar: "", isEnemy: true, damageTaken: 0, possibleAC: 0, iniciative: 0 },
  { avantar: "", isEnemy: true, damageTaken: 0, possibleAC: 0, iniciative: 0 },
  { avantar: "", isEnemy: true, damageTaken: 0, possibleAC: 0, iniciative: 0 },
  { avantar: "", isEnemy: true, damageTaken: 0, possibleAC: 0, iniciative: 0 }
];

let partyUListElement = document.querySelector(".party-list");

function createCharacterElement(character) {
  /* 
<li class="character">
    <div class="character-container">
        <div class="character-details">
            <img src="#" alt="#" />
            <p>name</p>
        </div>
        <div class="initiative-container">
            <span>1</span>
        </div>
    </div>
</li>
*/

  let liElement = document.createElement("li");
  liElement.classLis.add("character");

  let charContainerElement = document.createElement("div");
  charContainerElement.classList.add("character-container");

  let charContainerElement = document.createElement("div");
  charContainerElement.classList.add("character-details");

  let avatarElement = document.createElement("img");
  let nameElement = document.createElement("p");

  let initiativeContainerElement = document.createElement("div");
  initiativeContainerElement.classList.add("initiative-container");

  let initiativeCounterElement = document.createElement("span");
}
