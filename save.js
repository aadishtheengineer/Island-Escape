// LOST ISLAND ONLINE - SAVE SYSTEM


function saveGame(){


let saveData = {


health: player.health,

gems: player.gems,

weapon: player.weapon,

level: player.level,

inventory: inventory.weapons,

pet: equippedPet


};



localStorage.setItem(

"LostIslandSave",

JSON.stringify(saveData)

);



alert("💾 Game Saved!");

}



// Load game

function loadGame(){


let data =
localStorage.getItem(
"LostIslandSave"
);



if(data){


let saveData =
JSON.parse(data);



player.health =
saveData.health;


player.gems =
saveData.gems;


player.weapon =
saveData.weapon;


player.level =
saveData.level;



inventory.weapons =
saveData.inventory || 
["Wood Sword"];



equippedPet =
saveData.pet || null;



updateHUD();



alert(
"📥 Game Loaded!"
);


}

else{


alert(
"No save found"
);


}


}



// Auto save every 60 seconds

setInterval(

function(){

saveGame();

},

60000

);
