const encounter = (function() {
	function createEncounter() {
		// get all characters sorted + counter element
		const characters = comunications.getCharactersSortedByInit();
		// save into local storage
		comunications.setEncounter(characters);
		// render enccounter
		renderEncounterList(characters);
	}

	function renderEncounterList(characters) {
		// build list template
		const characterListTemplate = encounterTemplates.encounterList(characters);

		// render into the DOM -> TODO: render(characterListTemplate, here)
		const listContainter = document.querySelector('.encounter-list-container');
		listContainter.innerHTML = '';
		listContainter.appendChild(characterListTemplate);
	}

	function nextTurn() {
		// get current order
		const currentOrder = comunications.getCurrentEncounterOrder();

		// switch order
		const [firstElement, ...rest] = currentOrder;
		const newOrder = [...rest, firstElement];

		// check if counter is in position 0
		if (newOrder[0].isCounter) {
			newOrder[0].counter++;
		}

		// update encounter order
		comunications.updateEncounterOrder(newOrder);

		// render new order
		renderEncounterList(newOrder);
	}

	function previousTurn() {
		// // get current order
		// const currentOrder = comunications.getCurrentEncounterOrder();
		// switch order
		// TODO: add logic here
		// const newOrder;
		// update encounter order
		// comunications.updateEncounterOrder(newOrder);
		// render new order
		// const listContainter = document.querySelector('.encounter-list-container');
		// listContainter.appendChild(characterListTemplate);
	}

	function handleEventListeners() {
		const nextButton = document.querySelector('.next-btn');
		const previousButton = document.querySelector('.previous-btn');

		nextButton.addEventListener('click', function() {
			nextTurn();
		});

		previousButton.addEventListener('click', function() {
			console.log('previous encounter');
			previousTurn();
		});
	}

	function init() {
		createEncounter();
		handleEventListeners();
	}

	return {
		init: init
	};
})();

window.onload = event => {
	encounter.init();
};
