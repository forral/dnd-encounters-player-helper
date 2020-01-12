const encounter = (function() {
	function test() {
		console.log('connected');

		const characters = comunications.getCharactersSortedByInit();
		console.log('characters', characters);
	}

	function init() {
		test();
	}

	return {
		init: init
	};
})();

window.onload = event => {
	encounter.init();
};
