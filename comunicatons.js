const comunications = (function() {
	function addCharacter(data, characterType) {
		let characters = JSON.parse(localStorage.getItem('characters'));
		characters[characterType].push(data);
		localStorage.setItem('characters', JSON.stringify(characters));
	}

	function getCharacters() {
		let characters = JSON.parse(localStorage.getItem('characters'));
		return characters;
	}

	return { addCharacter: addCharacter, getCharacters: getCharacters };
})();
