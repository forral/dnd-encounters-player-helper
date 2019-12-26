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
}

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

addPartyList();
addEnemyList();
handleEventListeners();
