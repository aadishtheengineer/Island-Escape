// LOST ISLAND ONLINE - UPDATE SYSTEM


let gameVersion = {

    version:"1.0.0",

    lastUpdate:"Launch"

};




// Update history

let updates = [

{

version:"1.0.0",

name:"Island Launch",

notes:"🎮 Game released with multiplayer, pets, bosses, and weapons!"

},

{

version:"1.1.0",

name:"Adventure Update",

notes:"🌎 Added new areas, enemies, and rewards!"

},

{

version:"1.2.0",

name:"Boss Update",

notes:"👑 Added stronger bosses and special attacks!"

}

];





// Show updates

function showUpdates(){


let text =

"🔄 LOST ISLAND UPDATES\n\n";



updates.forEach(update=>{


text +=

update.version +

" - " +

update.name +

"\n" +

update.notes +

"\n\n";


});



alert(text);


}





// Change version

function setGameVersion(version,name){


gameVersion.version=version;


gameVersion.lastUpdate=name;


}




// Save update info

function saveUpdates(){


localStorage.setItem(

"LostIslandUpdates",

JSON.stringify(gameVersion)

);


}




// Load update info

function loadUpdates(){


let data =

localStorage.getItem(
"LostIslandUpdates"
);



if(data){


gameVersion =
JSON.parse(data);


}


}
