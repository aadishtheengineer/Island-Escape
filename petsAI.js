// LOST ISLAND ONLINE - PET AI SYSTEM


let petAI = {

    attackPower:5,

    pickupRange:100,

    followDistance:50

};




// Pet follows player

function petFollow(){


if(equippedPet){


if(!equippedPet.x){

equippedPet.x =
playerCharacter.x;

equippedPet.y =
playerCharacter.y;

}



let dx =
playerCharacter.x - equippedPet.x;


let dy =
playerCharacter.y - equippedPet.y;



equippedPet.x += dx * 0.05;

equippedPet.y += dy * 0.05;


}


}




// Pet attacks enemies

function petAttack(){


if(!equippedPet){

return;

}



enemies.forEach(enemy=>{


let distance = Math.hypot(

equippedPet.x-enemy.x,

equippedPet.y-enemy.y

);



if(distance < 60){


enemy.health -=
petAI.attackPower;


}


});


}




// Pet collects gems

function petCollect(){


if(!equippedPet){

return;

}



if(droppedItems){


droppedItems.forEach((item,index)=>{


let distance = Math.hypot(

equippedPet.x-item.x,

equippedPet.y-item.y

);



if(distance < petAI.pickupRange){


items[item.type] += item.amount;


droppedItems.splice(index,1);


}



});


}


}




// Add pet AI loop

setInterval(

function(){

petFollow();

petAttack();

petCollect();

},

100

);
