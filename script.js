function setCharacter(character, characterType) {
	if (characterType === 'party') {
		PARTY.push({
			...character,
			avatar: 'https://via.placeholder.com/50',
			isEnemy: false,
			damageDone: 0,
			initiative: 0
		});

		let partyUListElement = document.querySelector('.party-list');
		partyUListElement.innerHTML = '';
		addPartyList();
	}
}

function addPartyList() {
	let partyUListElement = document.querySelector('.party-list');

	PARTY.forEach(function(character, index) {
		partyUListElement.appendChild(helperModule.characterContainerElement(character, index));
	});
}

function addEnemyList() {
	let enemyUListElement = document.querySelector('.enemies-list');

	ENEMIES.forEach(function(enemies, index) {
		enemyUListElement.appendChild(helperModule.characterContainerElement(enemies, index));
	});
}

function toggleInitiative(element, array) {
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

	array[spanElement.dataset.indexNumber].initiative = inputValue;
}

function addPartyForm() {
	const modalContentElement = document.querySelector('#party-tab-content');
	const form = helperModule.templateAddCharacterForm(FORM_CONFIG_PARTY, 'party');
	modalContentElement.appendChild(form);
}

function addEnemyForm() {
	const modalContentElement = document.querySelector('#enemy-tab-content');
	const form = helperModule.templateAddCharacterForm(FORM_CONFIG_ENEMIES, 'enemy');
	modalContentElement.appendChild(form);
}

function handleEventListeners() {
	const partyListContainer = document.querySelector('.party-container');
	const enemyListContainer = document.querySelector('.enemies-container');
	const tablinks = document.querySelectorAll('.tablinks');
	const formButtons = document.querySelectorAll('.form-button');

	// Toggle span to input party list
	partyListContainer.addEventListener('dblclick', function(event) {
		if (event.target.className !== 'initiative-counter') return;
		toggleInitiative(event.target);
	});

	enemyListContainer.addEventListener('dblclick', function(event) {
		if (event.target.className !== 'initiative-counter') return;
		toggleInitiative(event.target);
	});

	partyListContainer.addEventListener('keypress', function(event) {
		if (event.target.className !== 'initiative-input') return;
		toggleInitiative(event, PARTY);
	});

	enemyListContainer.addEventListener('keypress', function(event) {
		if (event.target.className !== 'initiative-input') return;
		toggleInitiative(event, ENEMIES);
	});

	tablinks.forEach(function(element) {
		element.addEventListener('click', function(event) {
			tablinks.forEach(function(element) {
				element.classList.remove('active');
			});

			let tabPartyContentElement = document.querySelector('#party-tab-content');
			let tabEnemyContentElement = document.querySelector('#enemy-tab-content');

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
			if (event.target.dataset.characterType === 'party') {
				const formElements = [...event.target.form.elements];

				const newCharacter = formElements.reduce(function(accumulator, currentElement) {
					if (currentElement.type === 'button') return accumulator;

					if (currentElement.value === '') {
						accumulator[currentElement.name] = currentElement.value;
						return accumulator;
					}

					accumulator[currentElement.previousElementSibling.for] = currentElement.value;
					return accumulator;
				}, {});

				setCharacter(newCharacter, 'party');
			}

			if (event.target.dataset.characterType === 'enemy') {
				console.log(event.target.form.elements);
			}
		});
	});
}

addPartyList();
addEnemyList();
addPartyForm();
addEnemyForm();
handleEventListeners();
