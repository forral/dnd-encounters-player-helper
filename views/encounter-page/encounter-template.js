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
					<p>${character.class}</p>
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
		debugger;
		const encounterElement = document.createElement('ul');

		let liTemplate = '';

		characters.forEach(character => {
			if (character.isCounter) {
				liTemplate = liTemplate + encounterCounterElement(character);
			}

			if (character.isEnemy) {
				liTemplate = liTemplate + encounterEnemyElement(character);
			}

			if (!character.isEnemy) {
				liTemplate = liTemplate + encounterPartyElement(character);
			}
		});

		encounterElement.innerHTML = liTemplate;
		return encounterElement;
	}

	return {
		encounterList: encounterList
	};
})();
