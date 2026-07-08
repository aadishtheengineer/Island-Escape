// LOST ISLAND ONLINE - MINING SYSTEM


let pickaxe = {

    name:"Wood Pickaxe",
    level:1,
    power:1

};



let miningRocks = [

{
    x:250,
    y:600,
    health:50
},

{
    x:700,
    y:250,
    health:100
},

{
    x:1100,
    y:700,
    health:200
}

];



// Gem drops

function getGemReward(){


let chance=Math.random();


if(chance < 0.05){

return 500; // rare rainbow gem

}


if(chance < 0.20){

return 100; // ruby

}


if(chance < 0.50){

return 25; // crystal

}


return 5; // normal gem


}



// Draw mining rocks

function drawMiningRocks(){


miningRocks.forEach(rock=>{


ctx.fillStyle="darkgray";


ctx.beginPath();


ctx.arc(

rock.x,

rock.y,

30,

0,

Math.PI*2

);


ctx.fill();


});


}



// Mine with E key

document.addEventListener(
"keydown",
function(e){


if(e.key.toLowerCase()==="e"){


miningRocks.forEach((rock,index)=>{


let distance =
Math.hypot(

playerCharacter.x-rock.x,

playerCharacter.y-rock.y

);



if(distance < 70){


rock.health -= pickaxe.power * 10;



if(rock.health <= 0){


let gems =
getGemReward();



player.gems += gems;



miningRocks.splice(index,1);



updateHUD();



alert(
"💎 Found " + gems + " gems!"
);


}


}


});


}

});




// Draw rocks in world

let oldWorldDraw = drawWorld;


drawWorld=function(){


oldWorldDraw();


drawMiningRocks();


};
