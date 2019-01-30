"use strict";

const BIG_IMAGE_SRC = {
    Mario: "./images/Mario_Kart.png",
    Luigi: "./images/Luigi_Kart.png",
    Peach: "./images/Peach_Kart.png",
    Daisy: "./images/Daisy_Kart.png",
    Rosalina: "./images/Rosalina_Kart.png",
    Rmario: "./images/Rmario_Kart.png",
    Catpeach: "./images/Catpeach_Kart.png",
    Yoshi: "./images/Yoshi_Kart.png",
    Toad: "./images/Toad_Kart.png",
    Koopa: "./images/Koopa_Kart.png",
    ShyGuy: "./images/Shyguy_Kart.png",
    Lakitu: "./images/Lakitu_Kart.png",
    Toadette: "./images/Toadette_Kart.png",
    KingBoo: "./images/KingBoo_Kart.png",
    Babymario: "./images/Babymario_Kart.png",
    Babypeach: "./images/Babypeach_Kart.png",
    Babydaisy: "./images/Babydaisy_Kart.png",
    Babyrosalina: "./images/Babyrosalina_Kart.png",
    Metalmario: "./images/Metalmario_Kart.png",
    Pinkpeach: "./images/Pinkgoldpeach_Kart.png",
    Wario: "./images/Wario_Kart.png",
    Waluigi: "./images/Waluigi_Kart.png",
    Donkeykong: "./images/Donkeykong_Kart.png",
    Bowser: "./images/Bowser_Kart.png",
    Drybones: "./images/Drybones_Kart.png",
    Bowserjr: "./images/Bowserjr_Kart.png",
    Drybowser: "./images/Drybowser_Kart.png",
    Lemmy: "./images/Lemmy_Kart.png",
    Larry: "./images/Larry_Kart.png"
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
