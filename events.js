// LOST ISLAND ONLINE - EVENTS SYSTEM


let activeEvent = null;


let events = [

{
    name:"💎 Gem Rush",
    reward:"Double gems"
},

{
    name:"👹 Monster Invasion",
    reward:"Extra enemy drops"
},

{
    name:"☄️ Meteor Shower",
    reward:"Rare crystals"
},

{
    name:"🏴 Treasure Hunt",
    reward:"Hidden treasure"
},

{
    name:"🌈 Rainbow Event",
    reward:"Rare gems"
}

];




// Start event

function startEvent(eventName){


let event =
events.find(
e=>e.name===eventName
);



if(event){


activeEvent=event;


alert(

"🎉 Event Started!\n" +
event.name

);


}


}



// Random event

function randomEvent(){


let random =

events[
Math.floor(
Math.random()*events.length
)
];


startEvent(random.name);


}



// Event rewards

function eventReward(){


if(!activeEvent){

return;

}



if(activeEvent.name==="💎 Gem Rush"){


player.gems += 50;


}



if(activeEvent.name==="🌈 Rainbow Event"){


player.gems += 500;


}



updateHUD();


}




// Events every 10 minutes

setInterval(

function(){

randomEvent();

},

600000

);
