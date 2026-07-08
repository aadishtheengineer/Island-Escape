// LOST ISLAND ONLINE - DEVELOPER EVENTS SYSTEM


let developerEvent = {

    active:false,

    name:null

};




// Start developer event

function startDeveloperEvent(name){


if(admin.active){


developerEvent.active=true;


developerEvent.name=name;



alert(

"⭐ Developer Event Started!\n" +
name

);


}

else{


alert(
"❌ Admin only"
);


}


}




// Developer reward

function developerReward(amount){


if(admin.active){


player.gems += amount;


updateHUD();



alert(

"🎁 Developer reward: +" +
amount +
" gems"

);


}


}




// Spawn special event

function spawnDeveloperBoss(){


if(admin.active){



bosses.push({

name:"⭐ Developer Guardian",

x:1000,

y:500,

health:10000,

maxHealth:10000,

damage:100,

reward:10000

});



alert(
"👑 Developer Boss Spawned!"
);


}


}




// End event

function endDeveloperEvent(){


if(admin.active){


developerEvent.active=false;


developerEvent.name=null;



alert(
"⭐ Developer event ended"
);


}


}
