// LOST ISLAND ONLINE - ENEMY SYSTEM


let enemies = [

{
    x:400,
    y:300,
    size:35,
    health:50,
    speed:1,
    name:"Wild Monster"
},

{
    x:900,
    y:500,
    size:45,
    health:100,
    speed:0.8,
    name:"Forest Beast"
}

];



// Draw enemies

function drawEnemies(){

    enemies.forEach(enemy=>{

        ctx.fillStyle="red";

        ctx.beginPath();

        ctx.arc(
            enemy.x,
            enemy.y,
            enemy.size,
            0,
            Math.PI*2
        );

        ctx.fill();


        // health bar

        ctx.fillStyle="black";

        ctx.fillRect(
            enemy.x-25,
            enemy.y-45,
            50,
            8
        );


        ctx.fillStyle="lime";

        ctx.fillRect(
            enemy.x-25,
            enemy.y-45,
            enemy.health/2,
            8
        );


    });

}



// Enemy follows player

function moveEnemies(){

    enemies.forEach(enemy=>{


        let dx =
        playerCharacter.x - enemy.x;


        let dy =
        playerCharacter.y - enemy.y;


        let distance =
        Math.sqrt(dx*dx+dy*dy);


        if(distance < 300){

            enemy.x +=
            (dx/distance)*enemy.speed;


            enemy.y +=
            (dy/distance)*enemy.speed;

        }


        // Damage player

        if(distance < 50){

            player.health -= 0.2;

            updateHUD();


            if(player.health <= 0){

                alert("💀 You died!");

                player.health=100;

                playerCharacter.x=500;

                playerCharacter.y=400;

                updateHUD();

            }

        }


    });

}



// Attack enemies with SPACE

document.addEventListener("keydown",function(e){


if(e.code==="Space"){


enemies.forEach((enemy,index)=>{


let distance =
Math.hypot(
playerCharacter.x-enemy.x,
playerCharacter.y-enemy.y
);



if(distance < 80){


enemy.health -= 25;



if(enemy.health <= 0){


player.gems += 25;


enemies.splice(index,1);


updateHUD();


alert("👹 Enemy defeated! +25 Gems");


}


}


});


}

});



// Add enemy drawing into game loop

let oldUpdateWorld = updateWorld;


updateWorld=function(){

    oldUpdateWorld();

    drawEnemies();

    moveEnemies();

};
