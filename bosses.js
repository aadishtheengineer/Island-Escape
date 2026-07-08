// LOST ISLAND ONLINE - BOSS SYSTEM


let bosses = [

{
    name:"🐉 Island Dragon",
    x:1200,
    y:600,
    health:2000,
    maxHealth:2000,
    damage:25,
    reward:1000
},

{
    name:"🌊 Sea Monster",
    x:1500,
    y:300,
    health:3000,
    maxHealth:3000,
    damage:35,
    reward:2500
},

{
    name:"🌋 Volcano Titan",
    x:800,
    y:900,
    health:5000,
    maxHealth:5000,
    damage:50,
    reward:5000
}

];



// Draw bosses

function drawBosses(){


bosses.forEach(boss=>{


ctx.fillStyle="purple";


ctx.beginPath();


ctx.arc(

boss.x,

boss.y,

60,

0,

Math.PI*2

);


ctx.fill();



ctx.fillStyle="black";


ctx.fillRect(

boss.x-50,

boss.y-90,

100,

10

);



ctx.fillStyle="red";


ctx.fillRect(

boss.x-50,

boss.y-90,

100 *

(boss.health /
boss.maxHealth),

10

);



ctx.fillStyle="white";


ctx.font="16px Arial";


ctx.fillText(

boss.name,

boss.x-60,

boss.y-70

);


});


}




// Attack boss with SPACE

document.addEventListener(
"keydown",
function(e){


if(e.code==="Space"){


bosses.forEach((boss)=>{


let distance =
Math.hypot(

playerCharacter.x-boss.x,

playerCharacter.y-boss.y

);



if(distance < 120){


boss.health -=
weaponStats[player.weapon] || 10;



if(boss.health <=0){


player.gems += boss.reward;


updateHUD();


alert(

"👑 Boss Defeated!\n💎 +" +
boss.reward +
" Gems"

);



}


}


});


}

});




// Add bosses to world draw

let oldDrawWorldBoss =
drawWorld;


drawWorld=function(){


oldDrawWorld();


drawBosses();


};
