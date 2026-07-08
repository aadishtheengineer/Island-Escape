// LOST ISLAND ONLINE - QUEST SYSTEM


let playerXP = 0;


let quests = [

{
    name:"Collect 10 Gems",
    goal:10,
    progress:0,
    reward:100,
    completed:false
},

{
    name:"Defeat 5 Monsters",
    goal:5,
    progress:0,
    reward:250,
    completed:false
},

{
    name:"Build Your First House",
    goal:1,
    progress:0,
    reward:500,
    completed:false
}

];



// Show quests

function showQuests(){


let text =
"📜 QUESTS\n\n";


quests.forEach((quest,index)=>{


text +=

(index+1) +
". " +
quest.name +
"\nProgress: " +
quest.progress +
"/" +
quest.goal +
"\n\n";


});


alert(text);


}



// Complete quest

function checkQuest(index){


let quest =
quests[index];


if(
quest.progress >= quest.goal &&
!quest.completed
){


quest.completed=true;


player.gems += quest.reward;


playerXP += 100;



alert(

"🏆 Quest Complete!\n+" +
quest.reward +
" Gems"

);



updateHUD();


}


}



// Add gems progress

function questGem(amount){


let quest =
quests[0];


if(!quest.completed){


quest.progress += amount;


checkQuest(0);


}


}



// Enemy defeat progress

function questEnemy(){


let quest =
quests[1];


if(!quest.completed){


quest.progress++;


checkQuest(1);


}


}



// Building progress

function questBuild(){


let quest =
quests[2];


if(!quest.completed){


quest.progress=1;


checkQuest(2);


}

}
