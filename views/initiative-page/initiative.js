const initiative = (function() {
	function setCharacter(character, characterType) {
		// construct new character and add into DB
		if (characterType === 'party') {
			comunications.addCharacter(
				{
					...character,
					id: helperModule.uuid(),
					avatar: 'https://via.placeholder.com/50',
					isEnemy: false,
					damageDone: 0,
					initiative: 0
				},
				characterType
			);
		}

		// construct new character and add into DB
		if (characterType === 'enemies') {
			comunications.addCharacter(
				{
					...character,
					id: helperModule.uuid(),
					avatar: 'https://via.placeholder.com/50',
					level: 1,
					isEnemy: true,
					classType: 'undead',
					damageTaken: 0,
					possibleAC: 0,
					initiative: 0
				},
				characterType
			);
		}

		// re-render UL list
		showTemplateCharacterList(characterType);
		closeModal();
	}

	function showTemplateCharacterList(characterType) {
		// construct the css class for enemies or party list
		const cssClassName = `.${characterType}-list`;
		// get the specific HTML UL element for enemies or party
		let uListElement = document.querySelector(cssClassName);

		// clean previous state
		uListElement.innerHTML = '';

		// get current characters from DB
		const characters = comunications.getCharacters();

		// generate new list elements from characters.party or characters.enemies
		characters[characterType].forEach(function(character) {
			uListElement.appendChild(helperModule.characterContainerElement(character));
		});
	}

	function toggleInitiative(element, characterType) {
		if (element.tagName === 'P') {
			element.classList.add('hide');
			element.nextElementSibling.classList.remove('hide');
			element.nextElementSibling.focus();
			return;
		}

		let key = event.which || event.keyCode;
		let inputElement = event.target;

		if (key !== 13) return;

		// on enter get the input value
		let inputValue = inputElement.value === '' ? 0 : inputElement.value;
		let spanElement = inputElement.previousSibling;

		// add the value in the span
		spanElement.innerHTML = inputValue;

		// toggle
		inputElement.classList.add('hide');
		spanElement.classList.remove('hide');

		let currentCharacter = comunications.getCharacterById(
			spanElement.dataset.indexNumber,
			characterType
		);

		currentCharacter.initiative = inputValue;

		comunications.updateCharacter(currentCharacter, characterType);
		showTemplateCharacterList(characterType);
	}

	function showTemplateForm(characterType) {
		// Build CSS ID name
		const cssIdName = `#${characterType}-tab-content`;
		// get HTML specific modal element by ID
		const modalContentElement = document.querySelector(cssIdName);
		// build specific character form from template
		const form = helperModule.templateAddCharacterForm(
			CONFIG.FORMS[characterType],
			characterType
		);
		// show on HTML
		modalContentElement.appendChild(form);
	}

	function buildCharacterFromFormValues(form) {
		// get elements from form
		const formElements = [...form.elements];

		// build chartacter object from form values
		return formElements.reduce(function(accumulator, currentElement) {
			// don't collect information about buttons on the form
			if (currentElement.type === 'button') return accumulator;

			if (currentElement.value === '') {
				accumulator[currentElement.name] = currentElement.value;
				return accumulator;
			}

			accumulator[currentElement.previousElementSibling.for] = currentElement.value;
			return accumulator;
		}, {});
	}

	function handleEventListeners() {
		const partyListContainer = document.querySelector('.party-container');
		const enemyListContainer = document.querySelector('.enemies-container');
		const tablinks = document.querySelectorAll('.tablinks');
		const formButtons = document.querySelectorAll('.form-button');
		const confirmButton = document.querySelector('.confirm-btn');

		// Toggle span to input party list
		partyListContainer.addEventListener('dblclick', function(event) {
			if (event.target.className !== 'initiative-counter') return;
			toggleInitiative(event.target, 'party');
		});

		enemyListContainer.addEventListener('dblclick', function(event) {
			if (event.target.className !== 'initiative-counter') return;
			toggleInitiative(event.target, 'enemies');
		});

		partyListContainer.addEventListener('keypress', function(event) {
			if (event.target.className !== 'initiative-input') return;
			toggleInitiative(event, 'party');
		});

		enemyListContainer.addEventListener('keypress', function(event) {
			if (event.target.className !== 'initiative-input') return;
			toggleInitiative(event, 'enemies');
		});

		confirmButton.addEventListener('click', function(event) {
			window.location = '../encounter-page/encounter-page.html';
		});

		// Modal TAB buttons
		tablinks.forEach(function(element) {
			element.addEventListener('click', function(event) {
				tablinks.forEach(function(element) {
					element.classList.remove('active');
				});

				let tabPartyContentElement = document.querySelector('#party-tab-content');
				let tabEnemyContentElement = document.querySelector('#enemies-tab-content');

				if (event.target.dataset.title === 'party') {
					tabPartyContentElement.classList.replace('hide', 'show');
					tabEnemyContentElement.classList.replace('show', 'hide');
				}

				if (event.target.dataset.title === 'enemy') {
					tabPartyContentElement.classList.replace('show', 'hide');
					tabEnemyContentElement.classList.replace('hide', 'show');
				}

				event.target.classList.add('active');
			});
		});

		formButtons.forEach(function(button) {
			button.addEventListener('click', function(event) {
				// is it PARTY or ENEMY character?
				const characterType = event.target.dataset.characterType;
				// build new character
				const newCharacter = buildCharacterFromFormValues(event.target.form);
				// add to character list
				setCharacter(newCharacter, characterType);
				// reset form fileds values
				event.target.form.reset();
			});
		});
	}

	function init() {
		handleEventListeners();
		showTemplateCharacterList('enemies');
		showTemplateCharacterList('party');
		showTemplateForm('enemies');
		showTemplateForm('party');
		console.log('connected');
	}

	return { init: init };
})();

window.onload = event => {
	initiative.init();
};
