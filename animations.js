// LOST ISLAND ONLINE - ANIMATION SYSTEM


let animation = {

    walking:false,
    attacking:false,
    frame:0

};




// Update animation

function updateAnimation(){


animation.frame += 0.1;


if(animation.frame > 2){

animation.frame = 0;

}


}




// Walking animation

function walkAnimation(){


if(animation.walking){


playerCharacter.y +=
Math.sin(animation.frame) * 0.5;


}


}




// Attack animation

function attackAnimation(){


if(animation.attacking){


ctx.fillStyle="yellow";


ctx.beginPath();


ctx.arc(

playerCharacter.x + 40,

playerCharacter.y,

20,

0,

Math.PI*2

);


ctx.fill();


}


}




// Start attack

function playAttackAnimation(){


animation.attacking=true;


setTimeout(

function(){

animation.attacking=false;

},

200

);


}




// Add animation loop

let oldAnimationUpdate =
updateWorld;


updateWorld=function(){


oldAnimationUpdate();


updateAnimation();

walkAnimation();

attackAnimation();


};
