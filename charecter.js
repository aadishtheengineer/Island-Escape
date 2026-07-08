// LOST ISLAND ONLINE - CHARACTER SYSTEM


let character = {

    hair:"Brown",
    eyes:"Blue",
    shirt:"Green",
    pants:"Black"

};



// Available choices

let characterOptions = {

    hair:[
        "Brown",
        "Black",
        "Blonde",
        "Red"
    ],

    eyes:[
        "Blue",
        "Green",
        "Brown"
    ],

    shirt:[
        "Green",
        "Blue",
        "Red",
        "Purple"
    ],

    pants:[
        "Black",
        "Gray",
        "Brown"
    ]

};




// Change character

function changeCharacter(type,value){


if(characterOptions[type].includes(value)){


character[type]=value;


alert(

"🎨 Changed " +
type +
" to " +
value

);


}


}




// Show character

function showCharacter(){


alert(

"🧍 Character\n\n" +

"💇 Hair: " +
character.hair +

"\n👀 Eyes: " +
character.eyes +

"\n👕 Shirt: " +
character.shirt +

"\n👖 Pants: " +
character.pants

);


}




// Save character

function saveCharacter(){


localStorage.setItem(

"LostIslandCharacter",

JSON.stringify(character)

);


}



// Load character

function loadCharacter(){


let saved =

localStorage.getItem(
"LostIslandCharacter"
);



if(saved){


character =

JSON.parse(saved);


}


}
