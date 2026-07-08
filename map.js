// LOST ISLAND ONLINE - MAP SYSTEM


let zones = [

{
    name:"🏖️ Beach",
    x:0,
    y:0,
    width:500,
    height:500
},

{
    name:"🌴 Jungle",
    x:500,
    y:0,
    width:600,
    height:600
},

{
    name:"❄️ Snow Mountain",
    x:0,
    y:500,
    width:600,
    height:500
},

{
    name:"🌋 Volcano",
    x:700,
    y:500,
    width:500,
    height:500
},

{
    name:"🕳️ Crystal Cave",
    x:1200,
    y:300,
    width:400,
    height:400
}

];



// Current zone

let currentZone="🏖️ Beach";



// Check player zone

function checkZone(){


zones.forEach(zone=>{


if(

playerCharacter.x > zone.x &&

playerCharacter.x < zone.x + zone.width &&

playerCharacter.y > zone.y &&

playerCharacter.y < zone.y + zone.height

){


if(currentZone !== zone.name){


currentZone = zone.name;


alert(
"Entering: " + currentZone
);


}


}


});


}



// Draw zones

function drawMap(){


zones.forEach(zone=>{


ctx.strokeStyle="black";


ctx.strokeRect(

zone.x,

zone.y,

zone.width,

zone.height

);


ctx.fillStyle="black";


ctx.font="20px Arial";


ctx.fillText(

zone.name,

zone.x+20,

zone.y+30

);


});


}



// Add map to game loop

let oldMovePlayer = movePlayer;


movePlayer=function(){


oldMovePlayer();


checkZone();


};
