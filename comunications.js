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

	function getCharacterById(id, characterType) {
		let characters = getCharacters();
		let charactersByType = characters[characterType];

		return charactersByType.find(character => character.id === id);
	}

	function getCharactersSortedByInit() {
		const characters = getCharacters();
		const allCharacters = [...characters.party, ...characters.enemies];
		return allCharacters
			.sort(function(a, b) {
				return a.initiative - b.initiative;
			})
			.reverse();
	}

	function updateCharacter(data, characterType) {
		let characters = getCharacters();
		let charactersByType = characters[characterType];

		charactersUpdated = charactersByType.map(function(character) {
			if (character.id === data.id) {
				return data;
			}
			return character;
		});

		characters[characterType] = charactersUpdated;

		localStorage.clear();
		localStorage.setItem('characters', JSON.stringify(characters));
	}

	return {
		addCharacter: addCharacter,
		getCharacters: getCharacters,
		getCharacterById: getCharacterById,
		updateCharacter: updateCharacter,
		getCharactersSortedByInit: getCharactersSortedByInit
	};
})();
