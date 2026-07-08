// LOST ISLAND ONLINE - SERVER SYSTEM


let servers = [];




// Create server

function createServer(hostName){


let server = {


id:
Math.floor(
100000 + Math.random()*900000
),


host:hostName,


players:[],


maxPlayers:10,


private:false


};



servers.push(server);



alert(

"🏠 Server Created!\nCode: " +
server.id

);



return server.id;


}




// Join server

function joinGameServer(code,name){


let server =

servers.find(
s=>s.id==code
);



if(server){


if(server.players.length <
server.maxPlayers){


server.players.push(name);



joinServer(code);



alert(

"✅ Joined " +
code

);



}

else{


alert(
"❌ Server Full"
);


}


}

else{


alert(
"❌ Server not found"
);


}


}




// Make private

function makePrivate(code){


let server =

servers.find(
s=>s.id==code
);



if(server){


server.private=true;


alert(
"🔒 Private server enabled"
);


}


}




// Developer server boost

function developerServer(code){


let server =

servers.find(
s=>s.id==code
);



if(server){


server.maxPlayers=100;


alert(
"⭐ Developer server upgraded"
);


}


}
