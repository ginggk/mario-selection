"use strict";

const BIG_IMAGE_SRC = {
    Mario: "./images/Mario_Kart.png",
    Luigi: "./images/Luigi_Kart.png",
    Peach: "./images/Peach_Kart.png",
    Daisy: "./images/Daisy_Kart.png",
    Rosalina: "./images/Rosalina_Kart.png",
    "Tanooki Mario": "./images/Rmario_Kart.png",
    "Cat Peach": "./images/Catpeach_Kart.png",
    Yoshi: "./images/Yoshi_Kart.png",
    Toad: "./images/Toad_Kart.png",
    Koopa: "./images/Koopa_Kart.png",
    ShyGuy: "./images/Shyguy_Kart.png",
    Lakitu: "./images/Lakitu_Kart.png",
    Toadette: "./images/Toadette_Kart.png",
    "King Boo": "./images/KingBoo_Kart.png",
    "Baby Mario": "./images/Babymario_Kart.png",
    "Baby Peach": "./images/Babypeach_Kart.png",
    "Baby Daisy": "./images/Babydaisy_Kart.png",
    "Baby Rosalina": "./images/Babyrosalina_Kart.png",
    "Metal Mario": "./images/Metalmario_Kart.png",
    "Pink Peach": "./images/Pinkgoldpeach_Kart.png",
    Wario: "./images/Wario_Kart.png",
    Waluigi: "./images/Waluigi_Kart.png",
    "Donkey Kong": "./images/Donkeykong_Kart.png",
    Bowser: "./images/Bowser_Kart.png",
    "Dry Bones": "./images/Drybones_Kart.png",
    "Bowser Jr": "./images/Bowserjr_Kart.png",
    "Dry Bowser": "./images/Drybowser_Kart.png",
    Lemmy: "./images/Lemmy_Kart.png",
    Larry: "./images/Larry_Kart.png",
    Wendy: "./images/Wendy_Kart.png",
    Ludwig: "./images/Ludwig_Kart.png",
    Iggy: "./images/Iggy_Kart.png",
    Roy: "./images/Roy_Kart.png",
    Morton: "./images/Morton_Kart.png",
    "Inkling Girl": "./images/Inklinggirl_Kart.png",
    "Inkling Boy": "./images/Inklingboy_Kart.png",
    Link: "./images/Link_Kart.png"
};

function listenForChange() {
    const characters = document.querySelectorAll(".character");
    const chosenCharacter = document.getElementById("chosenCharacter");
    const name = document.getElementById("chosenCharacterName");

    for (const characterElement of characters) {
        const characterName = characterElement.dataset.character;

        characterElement.addEventListener("mouseover", () => {
            chosenCharacter.src = BIG_IMAGE_SRC[characterName];
            name.innerText = characterName;
        });
    }
}

listenForChange();
