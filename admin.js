// LOST ISLAND ONLINE - ADMIN SYSTEM


let admin = {

    active:false,

    username:null

};




// Activate admin

function activateAdmin(name){

    admin.active = true;

    admin.username = name;


    alert(
        "⭐ Admin Mode Activated\nWelcome " + name
    );

}




// Give gems

function adminGiveGems(amount){

    if(admin.active){

        player.gems += amount;


        updateHUD();


        alert(
            "💎 Added " + amount + " gems"
        );

    }

}




// Unlock everything

function adminUnlockAll(){

    if(admin.active){

        giveAllWeapons();

        unlockShopAll();


        alert(
            "⭐ Everything unlocked!"
        );

    }

}




// Spawn events

function adminEvent(eventName){

    if(admin.active){

        startEvent(eventName);

    }

}




// Teleport player

function adminTeleport(x,y){

    if(admin.active){

        playerCharacter.x = x;

        playerCharacter.y = y;

    }

}




// Turn off admin

function disableAdmin(){

    admin.active = false;


    alert(
        "Admin mode disabled"
    );

}
