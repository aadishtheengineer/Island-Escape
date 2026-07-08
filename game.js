// LOST ISLAND ONLINE - GAME LOGIC

let player = {
    health: 100,
    gems: 0,
    weapon: "Wood Sword",
    level: 1,
    developer: false
};


// Start Game
function startGame(){

    document.getElementById("menu").style.display="none";

    document.getElementById("gameCanvas").style.display="block";

    document.getElementById("hud").style.display="block";


    let music=document.getElementById("music");

    music.play().catch(()=>{});


    updateHUD();

}


// Update HUD
function updateHUD(){

    document.getElementById("health").innerHTML =
    player.health;

    document.getElementById("gems").innerHTML =
    player.gems;

    document.getElementById("weapon").innerHTML =
    player.weapon;

}



// GEM COLLECTION TEST

function collectGem(amount){

    player.gems += amount;

    updateHUD();

}



// DEVELOPER SYSTEM

function unlockDeveloper(){

    let code =
    document.getElementById("developerCode").value;


    if(
        code === "11/1/15/123456" ||
        code === "12/18/18/123456"
    ){

        player.developer=true;


        player.health=999999;
        player.gems=999999;
        player.level=999;


        player.weapon="Celestial Blade";


        alert("⭐ Developer Mode Enabled");


        document.getElementById("developerPanel")
        .style.display="none";


        document.getElementById("eventPanel")
        .style.display="block";


        document.getElementById("returnButton")
        .style.display="block";


        updateHUD();


    }else{

        alert("Wrong Code");

    }

}



function closeDeveloper(){

    document.getElementById("developerPanel")
    .style.display="none";

}



// RETURN TO NORMAL

document.getElementById("returnButton")
.onclick=function(){

    player.developer=false;

    player.health=100;

    player.gems=0;

    player.level=1;

    player.weapon="Wood Sword";


    document.getElementById("eventPanel")
    .style.display="none";


    document.getElementById("returnButton")
    .style.display="none";


    updateHUD();


    alert("Returned to Normal");

};



// OPEN DEVELOPER PANEL

document.addEventListener("keydown",function(event){

    if(event.key==="`"){

        document.getElementById("developerPanel")
        .style.display="block";

    }

});



// BASIC PLAYER MOVEMENT TEST

let keys={};


document.addEventListener("keydown",
(e)=>{
keys[e.key]=true;
});


document.addEventListener("keyup",
(e)=>{
keys[e.key]=false;
});


// Game loop

function gameLoop(){

    if(keys["w"]){
        console.log("Moving forward");
    }

    if(keys["a"]){
        console.log("Moving left");
    }

    if(keys["s"]){
        console.log("Moving backward");
    }

    if(keys["d"]){
        console.log("Moving right");
    }


    requestAnimationFrame(gameLoop);

}


gameLoop();
