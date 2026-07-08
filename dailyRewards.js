// LOST ISLAND ONLINE - DAILY REWARDS SYSTEM


let dailyReward = {

    lastClaim:0,

    streak:0

};




// Rewards list

let rewardDays = [

100,

250,

500,

1000,

2500,

5000,

10000

];





// Claim daily reward

function claimDailyReward(){


let today =
new Date().toDateString();



if(
dailyReward.lastClaim === today
){

alert(
"🎁 You already claimed today's reward!"
);

return;

}




dailyReward.streak++;



if(
dailyReward.streak > 7
){

dailyReward.streak = 1;

}




let reward =

rewardDays[
dailyReward.streak - 1
];



player.gems += reward;



dailyReward.lastClaim = today;



saveDailyReward();


updateHUD();



alert(

"🎁 Daily Reward!\n" +

"🔥 Streak: " +
dailyReward.streak +

"\n💎 +" +
reward +
" Gems"

);


}




// Save reward data

function saveDailyReward(){


localStorage.setItem(

"LostIslandDailyReward",

JSON.stringify(dailyReward)

);


}




// Load reward data

function loadDailyReward(){


let data =

localStorage.getItem(
"LostIslandDailyReward"
);



if(data){


dailyReward =
JSON.parse(data);


}


}
