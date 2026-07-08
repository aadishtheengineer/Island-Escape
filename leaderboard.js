// LOST ISLAND ONLINE - LEADERBOARD SYSTEM


let leaderboard = [];




// Add player score

function addLeaderboardPlayer(){


let playerData = {


    name: account.username,


    level: player.level,


    gems: player.gems,


    bossKills: player.bossKills || 0


};



leaderboard.push(playerData);


saveLeaderboard();


}




// Sort leaderboard

function sortLeaderboard(){


leaderboard.sort(

(a,b)=>b.gems-a.gems

);


}




// Show leaderboard

function showLeaderboard(){


sortLeaderboard();


let text =
"🏆 LEADERBOARD\n\n";


leaderboard.forEach(

(player,index)=>{


text +=

(index+1) +
". " +
player.name +
" - 💎 " +
player.gems +
" gems\n";


});


alert(text);


}




// Save leaderboard

function saveLeaderboard(){


localStorage.setItem(

"LostIslandLeaderboard",

JSON.stringify(leaderboard)

);


}




// Load leaderboard

function loadLeaderboard(){


let data =
localStorage.getItem(
"LostIslandLeaderboard"
);



if(data){


leaderboard =
JSON.parse(data);


}


}
