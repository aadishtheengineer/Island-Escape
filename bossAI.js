// LOST ISLAND ONLINE - BOSS AI SYSTEM


let bossPhase = 1;


// Boss AI movement and attacks

function bossThink(){

    bosses.forEach(boss=>{


        let healthPercent =
        boss.health / boss.maxHealth;



        // Phase 2 - Half health

        if(
            healthPercent < 0.5 &&
            bossPhase === 1
        ){

            bossPhase = 2;

            boss.damage *= 2;

            boss.speed = 2;


            alert(
                "🔥 " +
                boss.name +
                " entered Phase 2!"
            );

        }




        // Phase 3 - Low health

        if(
            healthPercent < 0.2 &&
            bossPhase === 2
        ){

            bossPhase = 3;

            boss.damage *= 2;


            alert(
                "💀 " +
                boss.name +
                " became ENRAGED!"
            );

        }




        // Follow player

        let dx =
        playerCharacter.x - boss.x;


        let dy =
        playerCharacter.y - boss.y;


        let distance =
        Math.sqrt(
            dx*dx + dy*dy
        );



        if(distance < 500){


            boss.x +=
            (dx / distance) *
            0.5;


            boss.y +=
            (dy / distance) *
            0.5;


        }




        // Damage player when close

        if(distance < 80){


            player.health -=
            boss.damage * 0.01;


            updateHUD();


        }


    });

}




// Boss special attacks

function bossSpecialAttack(boss){


    let chance =
    Math.random();



    if(chance < 0.02){


        alert(
            "💥 " +
            boss.name +
            " used a special attack!"
        );


        player.health -= 20;


        updateHUD();


    }

}




// Run boss AI

setInterval(

function(){


    bossThink();



    bosses.forEach(boss=>{


        bossSpecialAttack(boss);


    });


},

100

);
