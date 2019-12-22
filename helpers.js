let helperModule = (function() {
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

  function characterContainerElement(character, index) {
    const { name, avatar, level, race, classType } = character;

    let characterContainerElement = createElementWithCSSClass(
      "div",
      "character-container"
    );

    let charElements = [
      creasteCharacterAvatarElement(character.avatar),
      createCharacterDetailsElement(name, level, race, classType),
      createCharacterInitElement(index)
    ];

    let characterElement = createElementWithCSSClass("li", "character");
    characterElement.appendChild(
      appendChildren(characterContainerElement, charElements)
    );

    return characterElement;
  }

  function creasteCharacterAvatarElement(imgSrc) {
    let avatarContainer = createElementWithCSSClass("div", "character-avatar");

    let imgElement = document.createElement("img");
    imgElement.src = imgSrc;

    avatarContainer.appendChild(imgElement);
    return avatarContainer;
  }

  function createCharacterDetailsElement(name, level, race, classType) {
    // 1. SETUP
    let characterDetailsElemet = createElementWithCSSClass(
      "div",
      "character-details"
    );
    let nameElement = createElementWithText("p", name);
    let subTitleText = `Lvl ${level} | ${race} | ${classType}`;
    let subTitleElement = createElementWithText("p", subTitleText);

    // 2. MOUNT
    return appendChildren(characterDetailsElemet, [
      nameElement,
      subTitleElement
    ]);
  }

  function createCharacterInitElement(index) {
    // 1. SETUP
    // Create main container
    let characterInitElement = createElementWithCSSClass(
      "div",
      "character-init"
    );

    // Create sub container
    let initContainerElement = createElementWithCSSClass(
      "div",
      "init-container"
    );

    // Create title
    let titleElement = createElementWithText("h5", "initiative");
    // Create init value and input
    let initValueElement = createElementWithText(
      "p",
      "0",
      "initiative-counter"
    );
    initValueElement.dataset.indexNumber = index;

    let initInputElement = createElementWithCSSClass("input", "hide");
    initInputElement.classList.add("initiative-input");
    initInputElement.type = "text";

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
    characterContainerElement: characterContainerElement
  };
})();
