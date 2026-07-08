// LOST ISLAND ONLINE - WEATHER SYSTEM


let weather = {

    current:"Sunny",
    active:false

};



// Weather types

let weatherTypes = [

"Sunny",
"Rain",
"Snow",
"Storm",
"Wind"

];




// Change weather

function changeWeather(type){


weather.current = type;

weather.active = true;


alert(
"🌦️ Weather changed: " + type
);


}




// Random weather

function randomWeather(){


let random =
weatherTypes[
Math.floor(
Math.random()*weatherTypes.length
)
];


changeWeather(random);


}



// Weather effects

function weatherEffect(){


if(weather.current==="Rain"){


ctx.fillStyle =
"rgba(0,150,255,0.3)";


ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);


}



if(weather.current==="Snow"){


ctx.fillStyle =
"white";


for(let i=0;i<50;i++){


ctx.beginPath();


ctx.arc(

Math.random()*canvas.width,

Math.random()*canvas.height,

3,

0,

Math.PI*2

);


ctx.fill();


}



}



if(weather.current==="Storm"){


player.health -= 0.01;


updateHUD();


}


}



// Add weather to game

let oldGameLoop =
updateWorld;


updateWorld=function(){


oldGameLoop();


weatherEffect();


};



// Weather changes every 5 minutes

setInterval(

function(){

randomWeather();

},

300000

);
