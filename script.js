function addPartyList() {
  let partyUListElement = document.querySelector(".party-list");

  PARTY.forEach(function(character, index) {
    partyUListElement.appendChild(
      helperModule.characterContainerElement(character, index)
    );
  });
}

function addEnemyList() {
  let enemyUListElement = document.querySelector(".enemies-list");

  ENEMIES.forEach(function(enemies, index) {
    enemyUListElement.appendChild(
      helperModule.characterContainerElement(enemies, index)
    );
  });
}

function toggleInitiative(element, array) {
  if (element.tagName === "P") {
    element.classList.add("hide");
    element.nextElementSibling.classList.remove("hide");
    element.nextElementSibling.focus();
    return;
  }

  let key = event.which || event.keyCode;
  let inputElement = event.target;

  if (key !== 13) return;

  // on enter get the input value
  let inputValue = inputElement.value === "" ? 0 : inputElement.value;
  let spanElement = inputElement.previousSibling;

  // add the value in the span
  spanElement.innerHTML = inputValue;

  // toggle
  inputElement.classList.add("hide");
  spanElement.classList.remove("hide");

  array[spanElement.dataset.indexNumber].initiative = inputValue;
}

function handleEventListeners() {
  const partyListContainer = document.querySelector(".party-container");
  const enemyListContainer = document.querySelector(".enemies-container");
  const tablinks = document.querySelectorAll(".tablinks");

  // Toggle span to input party list
  partyListContainer.addEventListener("dblclick", function(event) {
    if (event.target.className !== "initiative-counter") return;
    toggleInitiative(event.target);
  });

  enemyListContainer.addEventListener("dblclick", function(event) {
    if (event.target.className !== "initiative-counter") return;
    toggleInitiative(event.target);
  });

  partyListContainer.addEventListener("keypress", function(event) {
    if (event.target.className !== "initiative-input") return;
    toggleInitiative(event, PARTY);
  });

  enemyListContainer.addEventListener("keypress", function(event) {
    if (event.target.className !== "initiative-input") return;
    toggleInitiative(event, ENEMIES);
  });

  tablinks.forEach(function(element) {
    element.addEventListener("click", function(event) {
      tablinks.forEach(function(element) {
        element.classList.remove("active");
      });

      let tabPartyContentElement = document.querySelector("#party-tab-content");
      let tabEnemyContentElement = document.querySelector("#enemy-tab-content");

      if (event.target.dataset.title === "party") {
        tabPartyContentElement.classList.replace("hide", "show");
        tabEnemyContentElement.classList.replace("show", "hide");
      }

      if (event.target.dataset.title === "enemy") {
        tabPartyContentElement.classList.replace("show", "hide");
        tabEnemyContentElement.classList.replace("hide", "show");
      }

      event.target.classList.add("active");
    });
  });
}

addPartyList();
addEnemyList();
handleEventListeners();
