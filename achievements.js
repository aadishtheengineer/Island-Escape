// LOST ISLAND ONLINE - ACHIEVEMENTS SYSTEM


let achievements = [

{
    name:"💎 Gem Collector",
    goal:1000,
    progress:0,
    reward:500,
    unlocked:false
},

{
    name:"👹 Monster Hunter",
    goal:50,
    progress:0,
    reward:1000,
    unlocked:false
},

{
    name:"👑 Boss Slayer",
    goal:10,
    progress:0,
    reward:5000,
    unlocked:false
},

{
    name:"🏠 Builder",
    goal:25,
    progress:0,
    reward:750,
    unlocked:false
}

];




// Check achievements

function checkAchievements(){


achievements.forEach(achievement=>{


if(
achievement.progress >= achievement.goal &&
!achievement.unlocked
){


achievement.unlocked=true;


player.gems += achievement.reward;


alert(

"🥇 Achievement Unlocked!\n" +
achievement.name +
"\n💎 +" +
achievement.reward +
" gems"

);


updateHUD();


}


});


}




// Add achievement progress

function addAchievement(type,amount){


if(achievements[type]){


achievements[type].progress += amount;


checkAchievements();


}


}




// Show achievements

function showAchievements(){


let text =
"🥇 ACHIEVEMENTS\n\n";


achievements.forEach(a=>{


text +=

a.name +
"\n" +

a.progress +
"/" +
a.goal +
"\n\n";


});


alert(text);


}




// Save achievements

function saveAchievements(){


localStorage.setItem(

"LostIslandAchievements",

JSON.stringify(achievements)

);


}




// Load achievements

function loadAchievements(){


let data =
localStorage.getItem(
"LostIslandAchievements"
);



if(data){


achievements =
JSON.parse(data);


}


}
