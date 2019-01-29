"use strict";

const BIG_IMAGE_SRC = {
    Mario: "./images/Mario_Kart.png",
    Luigi: "./images/Luigi_Kart.png"
};

function listenForChange() {
    const characters = document.querySelectorAll(".character");
    const chosenCharacter = document.getElementById("chosenCharacter");

    for (const characterElement of characters) {
        const characterName = characterElement.dataset.character;

        characterElement.addEventListener(
            "mouseover",
            () => (chosenCharacter.src = BIG_IMAGE_SRC[characterName])
        );
    }
}

listenForChange();
