// LOST ISLAND ONLINE - SETTINGS SYSTEM


let settings = {

    music:true,
    sounds:true,
    volume:0.5,
    controls:"WASD"

};




// Change volume

function changeVolume(value){


settings.volume=value;


setVolume(value);


saveSettings();


}




// Toggle music

function toggleMusic(){


settings.music =
!settings.music;



if(settings.music){


startIslandMusic();


}

else{


stopMusic("island");


}



saveSettings();


}




// Toggle sounds

function toggleSounds(){


settings.sounds =
!settings.sounds;


saveSettings();


}




// Change controls

function changeControls(type){


settings.controls=type;


saveSettings();


}




// Save settings

function saveSettings(){


localStorage.setItem(

"LostIslandSettings",

JSON.stringify(settings)

);


}




// Load settings

function loadSettings(){


let data =

localStorage.getItem(
"LostIslandSettings"
);



if(data){


settings =
JSON.parse(data);


}


}
