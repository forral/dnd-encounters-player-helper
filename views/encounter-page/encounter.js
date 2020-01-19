const encounter = (function() {
	function showEncounterList() {
		const characters = comunications.getCharactersSortedByInit();
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
