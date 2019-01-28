function listenForChange() {
    var characters = document.querySelectorAll(".character");
    var chosenCharacter = document.getElementById("chosenCharacter");
    console.log(chosenCharacter);

    // var attribute = characters.getAttribute("data-character");
    var i = 0;
    let childArray = [];

    for (character of characters) {
        i += 1;
        if (character.firstElementChild != null) {
            console.log("index Value: ");
            console.log(i);
            childArray.push(i);

            console.log("hellooooooooooooooo");
            console.log("character.firstElementChild: ");
            console.log(character.firstElementChild);
        }
        // console.log("character: ");
        // console.log(character);

        console.log("getting attribute: ");
        console.log(i);
        console.log(childArray.length);
        if (i <= childArray.length) {
            var attribute = characters[
                childArray[i]
            ].firstElementChild.getAttribute("data-character");
        }
        console.log("NEW ATTRIBUTE ATEMPT");
        console.log(attribute);
        console.log("after showen: ");
        // var attribute = character.getAttribute("data-character");
        console.log(character.childNodes);
        console.log("attribute: ");
        console.log(attribute);
        character.addEventListener("mouseover", function() {
            console.log("this a for loop");
            console.log(attribute);

            if (attribute === "luigi") {
                console.log("u did it!!!!!!!!!!!");
            }
        });
    }
}

listenForChange();
