const encounterTemplates = (function() {
	function encounterPartyElement(character) {
		return `
			<li>
				<div class="avatar">
					<img src="${character.avatar}" alt="${character.name} avatar"/>
				</div>
				<div class="character-info">
					<p>${character.name}</p>
					<p>${character.class}</p>
				</div>
			</li>
			`;
	}

	function encounterEnemyElement(character) {
		return `
			<li>
				<div class="character-info">
					<p>${character.name}</p>
					<p>${character.race}</p>
				</div>
				<div class="avatar">
					<img src="${character.avatar}" alt="${character.name} avatar"/>
				</div>
			</li>
		`;
	}

	function encounterCounterElement(counter) {
		return `
			<li>
				<p>${counter.counter}</p>
			</li>
		`;
	}

	function encounterList(characters) {
		const encounterElement = document.createElement('ul');
		let liTemplate = '';

		characters.forEach(character => {
			// build Enemy list HTML element
			if (!character.isCounter && character.isEnemy) {
				liTemplate = liTemplate + encounterEnemyElement(character);
			}

			// build Party list HTML element
			if (!character.isCounter && !character.isEnemy) {
				liTemplate = liTemplate + encounterPartyElement(character);
			}

			// build counter list HTML element
			if (character.isCounter) {
				liTemplate = liTemplate + encounterCounterElement(character);
			}
		});

		encounterElement.innerHTML = liTemplate;
		return encounterElement;
	}

	return {
		encounterList: encounterList
	};
})();
