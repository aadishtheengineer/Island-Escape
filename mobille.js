// LOST ISLAND ONLINE - MOBILE CONTROLS


let mobileControls = {

    up:false,
    down:false,
    left:false,
    right:false

};




// Create mobile buttons

function createMobileControls(){


let buttons = [

["⬆️","up"],

["⬇️","down"],

["⬅️","left"],

["➡️","right"]

];



buttons.forEach(btn=>{


let button =
document.createElement("button");


button.innerHTML=btn[0];


button.style.position="absolute";

button.style.bottom="30px";


button.style.left =
(
btn[1]==="left" ? "30px" :
btn[1]==="right" ? "150px" :
"90px"
);



button.style.fontSize="30px";


document.body.appendChild(button);



button.ontouchstart=function(){

mobileControls[btn[1]]=true;

};



button.ontouchend=function(){

mobileControls[btn[1]]=false;

};


});


}




// Mobile movement

function mobileMove(){


if(mobileControls.up){

playerCharacter.y -= playerCharacter.speed;

}


if(mobileControls.down){

playerCharacter.y += playerCharacter.speed;

}


if(mobileControls.left){

playerCharacter.x -= playerCharacter.speed;

}


if(mobileControls.right){

playerCharacter.x += playerCharacter.speed;

}


}




// Start mobile controls

createMobileControls();



let oldMove =
movePlayer;


movePlayer=function(){


oldMove();


mobileMove();


};
