// LOST ISLAND ONLINE - NETWORKING SYSTEM


let network = {

    connected:false,

    updates:[]

};




// Connect

function connectNetwork(serverID){


network.connected=true;


alert(

"🔗 Connected to server " +
serverID

);


}




// Send player data

function sendPlayerData(){


if(!network.connected){

return;

}



let data = {


x:playerCharacter.x,


y:playerCharacter.y,


level:player.level,


gems:player.gems,


weapon:player.weapon


};



network.updates.push(data);


}




// Receive updates

function receiveUpdates(){


network.updates.forEach(data=>{


console.log(
"Player update:",
data
);


});


network.updates=[];


}




// Multiplayer update loop

setInterval(

function(){


sendPlayerData();


receiveUpdates();


},

100

);
