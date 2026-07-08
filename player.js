// PLAYER SYSTEM - LOST ISLAND ONLINE

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let playerCharacter = {

    x: canvas.width / 2,
    y: canvas.height / 2,

    size: 40,

    speed: 5,

    color: "blue",

    health: 100

};


let keysPressed = {};


// Controls

document.addEventListener("keydown", function(e){

    keysPressed[e.key.toLowerCase()] = true;

});


document.addEventListener("keyup", function(e){

    keysPressed[e.key.toLowerCase()] = false;

});



// Gems on map

let gems = [

{
x:300,
y:300,
amount:10
},

{
x:600,
y:400,
amount:25
},

{
x:900,
y:250,
amount:50
}

];



// Draw player

function drawPlayer(){

ctx.fillStyle = playerCharacter.color;

ctx.fillRect(

playerCharacter.x,
playerCharacter.y,
playerCharacter.size,
playerCharacter.size

);

}



// Draw gems

function drawGems(){

gems.forEach(gem=>{

ctx.fillStyle="cyan";

ctx.beginPath();

ctx.arc(
gem.x,
gem.y,
10,
0,
Math.PI*2
);

ctx.fill();


});

}



// Move player

function movePlayer(){

if(keysPressed["w"]){

playerCharacter.y -= playerCharacter.speed;

}

if(keysPressed["s"]){

playerCharacter.y += playerCharacter.speed;

}

if(keysPressed["a"]){

playerCharacter.x -= playerCharacter.speed;

}

if(keysPressed["d"]){

playerCharacter.x += playerCharacter.speed;

}


}



// Collect gems

function checkGems(){

gems.forEach((gem,index)=>{


let distance =
Math.hypot(
playerCharacter.x-gem.x,
playerCharacter.y-gem.y
);


if(distance < 40){

player.gems += gem.amount;

gems.splice(index,1);

updateHUD();


}


});


}



// Game drawing

function updateWorld(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


movePlayer();

checkGems();

drawGems();

drawPlayer();


requestAnimationFrame(updateWorld);

}


updateWorld();
