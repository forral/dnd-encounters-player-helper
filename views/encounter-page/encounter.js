const encounter = (function() {
	function showEncounterList() {
		// get all characters sorted + counter element
		const characters = comunications.getCharactersSortedByInit();
		// build list template
		const characterListTemplate = encounterTemplates.encounterList(characters);

		const listCountainter = document.querySelector('.encounter-list-container');
		listCountainter.appendChild(characterListTemplate);
		// render(characterListTemplate, here)
	}

	function init() {
		showEncounterList();
	}

	return {
		init: init
	};
})();

window.onload = event => {
	encounter.init();
};
