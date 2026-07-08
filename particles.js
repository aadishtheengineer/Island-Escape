// LOST ISLAND ONLINE - PARTICLE SYSTEM


let particles = [];



// Create particle

function createParticle(x,y,color){


particles.push({

    x:x,
    y:y,

    size:5,

    color:color,

    life:30,

    speedX:(Math.random()-0.5)*5,

    speedY:(Math.random()-0.5)*5

});


}




// Update particles

function updateParticles(){


particles.forEach((p,index)=>{


p.x += p.speedX;

p.y += p.speedY;


p.life--;


if(p.life<=0){

particles.splice(index,1);

}


});


}




// Draw particles

function drawParticles(){


particles.forEach(p=>{


ctx.fillStyle=p.color;


ctx.beginPath();


ctx.arc(

p.x,

p.y,

p.size,

0,

Math.PI*2

);


ctx.fill();


});


}




// Effects

function gemEffect(x,y){

createParticle(
x,
y,
"cyan"
);

}



function hitEffect(x,y){

createParticle(
x,
y,
"red"
);

}



function fireEffect(x,y){

createParticle(
x,
y,
"orange"
);

}




// Add particles to game

let oldParticleUpdate =
updateWorld;


updateWorld=function(){


oldParticleUpdate();


updateParticles();

drawParticles();


};
