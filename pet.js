// LOST ISLAND ONLINE - PET SYSTEM


let pets = [

{
    name:"Wolf",
    level:1,
    bonus:"Attack Boost",
    color:"gray"
},

{
    name:"Owl",
    level:1,
    bonus:"Finds Gems",
    color:"white"
},

{
    name:"Dragon",
    level:1,
    bonus:"Fire Damage",
    color:"orange"
}

];



let equippedPet = null;



// Equip pet

function equipPet(name){


let pet =
pets.find(
p => p.name === name
);



if(pet){


equippedPet = pet;


alert(
"🐾 Equipped " + pet.name
);


}


}



// Draw pet

function drawPet(){


if(equippedPet){


ctx.fillStyle =
equippedPet.color;


ctx.beginPath();


ctx.arc(

playerCharacter.x - 50,

playerCharacter.y,

15,

0,

Math.PI*2

);


ctx.fill();


}


}



// Pet follows player

function movePet(){


if(equippedPet){


equippedPet.x =
playerCharacter.x - 50;


equippedPet.y =
playerCharacter.y;


}


}



// Level up pet

function levelUpPet(){


if(equippedPet){


equippedPet.level++;


alert(

"⭐ " +
equippedPet.name +
" reached level " +
equippedPet.level

);


}


}



// Add pet drawing

let oldWorldUpdate = updateWorld;


updateWorld=function(){


oldWorldUpdate();


drawPet();

movePet();


};
