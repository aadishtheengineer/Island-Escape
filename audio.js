// LOST ISLAND ONLINE - AUDIO SYSTEM


let sounds = {

    menu:
    new Audio("assets/music/menu.mp3"),

    island:
    new Audio("assets/music/island.mp3"),

    boss:
    new Audio("assets/music/boss.mp3"),


    mine:
    new Audio("assets/sounds/mine.mp3"),

    attack:
    new Audio("assets/sounds/attack.mp3"),

    gem:
    new Audio("assets/sounds/collect.mp3")

};




// Play sound

function playSound(name){


if(sounds[name]){


sounds[name].play()
.catch(()=>{});


}


}




// Stop music

function stopMusic(name){


if(sounds[name]){


sounds[name].pause();


sounds[name].currentTime=0;


}


}




// Music volume

function setVolume(amount){


for(let sound in sounds){


sounds[sound].volume=amount;


}


}




// Start island music

function startIslandMusic(){


stopMusic("menu");


sounds.island.loop=true;


playSound("island");


}




// Boss music

function startBossMusic(){


stopMusic("island");


sounds.boss.loop=true;


playSound("boss");


}
