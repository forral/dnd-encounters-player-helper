function addPartyList() {
  let partyUListElement = document.querySelector(".party-list");

  PARTY.forEach(function(character, index) {
    partyUListElement.appendChild(
      helperModule.characterContainerElement(character)
    );
  });
}

// function addEnemyList() {
//   let enemyUListElement = document.querySelector(".enemies-list");

//   enemies.forEach(function(enemies, index) {
//     enemyUListElement.appendChild(createCharacterElement(enemies, index));
//   });
// }

// function toggleSpanToInput(element) {
//   element.classList.add("hide");
//   element.nextElementSibling.classList.remove("hide");
//   element.nextElementSibling.focus();
// }

// function toggleInputToSpan(event, array) {
//   let key = event.which || event.keyCode;
//   let inputElement = event.target;

//   if (key !== 13) return;

//   // on enter get the input value
//   let inputValue = inputElement.value === "" ? 0 : inputElement.value;
//   let spanElement = inputElement.previousSibling;

//   // add the value in the span
//   spanElement.innerHTML = inputValue;

//   // toggle
//   inputElement.classList.add("hide");
//   spanElement.classList.remove("hide");

//   array[spanElement.dataset.indexNumber].iniciative = inputValue;
// }

// function handleEventListeners() {
//   const partyListContainer = document.querySelector(".party-container");
//   const enemyListContainer = document.querySelector(".enemies-container");

//   // Toggle span to input party list
//   partyListContainer.addEventListener("dblclick", function(event) {
//     if (event.target.className !== "initiative-counter") return;
//     toggleSpanToInput(event.target);
//   });

//   // Toggle span to input enemies list
//   enemyListContainer.addEventListener("dblclick", function(event) {
//     if (event.target.className !== "initiative-counter") return;
//     toggleSpanToInput(event.target);
//   });

//   partyListContainer.addEventListener("keypress", function(event) {
//     if (event.target.className !== "initiative-input") return;
//     toggleInputToSpan(event, party);
//   });

//   enemyListContainer.addEventListener("keypress", function(event) {
//     if (event.target.className !== "initiative-input") return;
//     toggleInputToSpan(event, enemies);
//   });
// }

addPartyList();
// addEnemyList();
// handleEventListeners();
