const encounter = (function() {
	function showEncounterList() {
		const characters = comunications.getCharactersSortedByInit();
		console.log('characters', characters);
		const characterListTemplate = encounterTemplates.encounterList(characters);
		console.log('characterListTemplate', characterListTemplate);
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
