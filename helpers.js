let helperModule = (function() {
	function uuid() {
		/*jshint bitwise:false */
		var i, random;
		var uuid = '';

		for (i = 0; i < 32; i++) {
			random = (Math.random() * 16) | 0;
			if (i === 8 || i === 12 || i === 16 || i === 20) {
				uuid += '-';
			}
			uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
		}

		return uuid;
	}

	function capitalize(word) {
		if (typeof word !== 'string') return '';
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	function createElementWithCSSClass(elementTag, cssClassName) {
		let element = document.createElement(elementTag);
		element.classList.add(cssClassName);
		return element;
	}

	function createElementWithText(elementTag, text, cssClassName) {
		let element;

		if (cssClassName) {
			element = createElementWithCSSClass(elementTag, cssClassName);
		} else {
			element = document.createElement(elementTag);
		}

		let textNode = document.createTextNode(text);
		element.appendChild(textNode);
		return element;
	}

	function appendChildren(element, childrens) {
		childrens.forEach(function(child) {
			element.appendChild(child);
		});

		return element;
	}

	function templateSelectOptions(options) {
		const selectElement = document.createElement('select');

		options.forEach(function(item) {
			const optionElement = createElementWithText('option', item);
			optionElement.value = item;
			selectElement.appendChild(optionElement);
		});
		return selectElement;
	}

	function templateAddCharacterForm(config, characterType) {
		const formElement = document.createElement('form');
		const ulElement = document.createElement('ul');
		const formButton = createElementWithText('button', 'ok', 'form-button');
		formButton.type = 'button';
		formButton.dataset.characterType = characterType;

		config.forEach(function(item) {
			const liElement = document.createElement('li');
			const labelElement = document.createElement('label');
			labelElement.for = item.name;
			const capitalizeName = capitalize(item.name);
			const labelText = document.createTextNode(`${capitalizeName}:`);
			labelElement.appendChild(labelText);
			liElement.appendChild(labelElement);

			let formElement;

			if (item.element === 'input') {
				formElement = document.createElement('input');
				formElement.type = item.type;
				formElement.name = item.name;
			}

			if (item.element === 'select') {
				formElement = templateSelectOptions(DND_DB[item.type]);
			}

			liElement.appendChild(formElement);
			ulElement.appendChild(liElement);
		});

		formElement.appendChild(ulElement);
		formElement.appendChild(formButton);

		return formElement;
	}

	function characterContainerElement(character, index) {
		const { name, level, race, classType } = character;

		let characterContainerElement = createElementWithCSSClass('div', 'character-container');

		let charElements = [
			creasteCharacterAvatarElement(character.avatar),
			createCharacterDetailsElement(name, level, race, classType),
			createCharacterInitElement(index)
		];

		let characterElement = createElementWithCSSClass('li', 'character');
		characterElement.appendChild(appendChildren(characterContainerElement, charElements));

		return characterElement;
	}

	function createSelectionElement(list) {
		let selectionElement = document.createElement('select');

		list.forEach(function(item) {
			let optionElement = createElementWithText('option', item);
			optionElement.value = item;
			selectionElement.appendChild(optionElement);
		});

		return selectionElement;
	}

	function creasteCharacterAvatarElement(imgSrc) {
		let avatarContainer = createElementWithCSSClass('div', 'character-avatar');

		let imgElement = document.createElement('img');
		imgElement.src = imgSrc;

		avatarContainer.appendChild(imgElement);
		return avatarContainer;
	}

	function createCharacterDetailsElement(name, level, race, classType) {
		// 1. SETUP
		let characterDetailsElemet = createElementWithCSSClass('div', 'character-details');
		let nameElement = createElementWithText('p', name);
		let subTitleText = `Lvl ${level} | ${race} | ${classType}`;
		let subTitleElement = createElementWithText('p', subTitleText);

		// 2. MOUNT
		return appendChildren(characterDetailsElemet, [nameElement, subTitleElement]);
	}

	function createCharacterInitElement(index) {
		// 1. SETUP
		// Create main container
		let characterInitElement = createElementWithCSSClass('div', 'character-init');

		// Create sub container
		let initContainerElement = createElementWithCSSClass('div', 'init-container');

		// Create title
		let titleElement = createElementWithText('h5', 'initiative');
		// Create init value and input
		let initValueElement = createElementWithText('p', '0', 'initiative-counter');
		initValueElement.dataset.indexNumber = index;

		let initInputElement = createElementWithCSSClass('input', 'hide');
		initInputElement.classList.add('initiative-input');
		initInputElement.type = 'text';

		// 2. MOUNT
		let mountedInitContainerElement = appendChildren(initContainerElement, [
			titleElement,
			initValueElement,
			initInputElement
		]);
		characterInitElement.appendChild(mountedInitContainerElement);

		return characterInitElement;
	}

	return {
		characterContainerElement: characterContainerElement,
		createSelectionElement: createSelectionElement,
		templateAddCharacterForm: templateAddCharacterForm
	};
})();
