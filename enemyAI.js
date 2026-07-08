// LOST ISLAND ONLINE - ENEMY AI SYSTEM


let enemyDifficulty = 1;




// Improve enemies

function increaseEnemyDifficulty(){


enemyDifficulty += 0.5;


enemies.forEach(enemy=>{


enemy.health *= 1.2;

enemy.speed *= 1.1;


});


}




// Enemy smarter movement

function enemyChaseAI(){


enemies.forEach(enemy=>{


let dx =
playerCharacter.x - enemy.x;


let dy =
playerCharacter.y - enemy.y;


let distance =
Math.sqrt(
dx*dx + dy*dy
);



if(distance < 400){


enemy.x +=
(dx/distance) *
enemy.speed;


enemy.y +=
(dy/distance) *
enemy.speed;


}




// Attack range

if(distance < 50){


player.health -=
0.1 * enemyDifficulty;


updateHUD();


}



});


}




// Special enemy abilities

function enemyAbility(enemy){


let chance =
Math.random();



if(chance < 0.01){


enemy.speed *= 2;


alert(
"👹 Enemy became enraged!"
);


}


}




// Run AI

setInterval(

function(){

enemyChaseAI();


enemies.forEach(enemy=>{

enemyAbility(enemy);

});


},

100

);
