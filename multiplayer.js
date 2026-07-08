// LOST ISLAND ONLINE - MULTIPLAYER SYSTEM


let multiplayer = {

    connected:false,

    serverID:null,

    players:[]

};




// Create player data

function createOnlinePlayer(name){


return {

    name:name,

    x:500,

    y:400,

    level:1,

    gems:0

};


}




// Join server

function joinServer(id){


multiplayer.serverID=id;


multiplayer.connected=true;



alert(

"🌐 Joined Server: " + id

);



}




// Leave server

function leaveServer(){


multiplayer.connected=false;


multiplayer.serverID=null;


multiplayer.players=[];


alert(
"🚪 Left server"
);


}




// Add player

function addPlayer(name){


let newPlayer =
createOnlinePlayer(name);



multiplayer.players.push(
newPlayer
);


}




// Draw other players

function drawOnlinePlayers(){


multiplayer.players.forEach(player=>{


ctx.fillStyle="blue";


ctx.beginPath();


ctx.arc(

player.x,

player.y,

20,

0,

Math.PI*2

);


ctx.fill();



ctx.fillStyle="white";


ctx.fillText(

player.name,

player.x-20,

player.y-30

);


});


}




// Multiplayer drawing

let oldDraw =
drawWorld;


drawWorld=function(){


oldDraw();


drawOnlinePlayers();


};
