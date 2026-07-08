// LOST ISLAND ONLINE - WORLD SYSTEM

let trees = [
    {x:200, y:200},
    {x:500, y:150},
    {x:800, y:350}
];


let rocks = [
    {x:350, y:450, gems:10},
    {x:700, y:500, gems:25},
    {x:1000, y:300, gems:50}
];


// Draw island objects

function drawWorld(){


    // Trees

    trees.forEach(tree=>{

        ctx.fillStyle="brown";

        ctx.fillRect(
            tree.x,
            tree.y,
            20,
            50
        );


        ctx.fillStyle="green";

        ctx.beginPath();

        ctx.arc(
            tree.x+10,
            tree.y,
            35,
            0,
            Math.PI*2
        );

        ctx.fill();

    });



    // Rocks

    rocks.forEach(rock=>{


        ctx.fillStyle="gray";


        ctx.beginPath();

        ctx.arc(
            rock.x,
            rock.y,
            25,
            0,
            Math.PI*2
        );


        ctx.fill();


    });


}


// Mining system

document.addEventListener("keydown",function(e){


if(e.key==="e"){


rocks.forEach((rock,index)=>{


let distance =
Math.hypot(
playerCharacter.x-rock.x,
playerCharacter.y-rock.y
);



if(distance < 60){


player.gems += rock.gems;


rocks.splice(index,1);


updateHUD();


alert(
"💎 Found gems!"
);


}



});


}


});
