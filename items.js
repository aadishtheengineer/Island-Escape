// LOST ISLAND ONLINE - ITEM SYSTEM


let items = {

    wood:0,
    stone:0,
    crystals:0,
    food:0

};



// Items on map

let droppedItems = [

{
    type:"wood",
    amount:5,
    x:300,
    y:200
},

{
    type:"stone",
    amount:10,
    x:650,
    y:400
},

{
    type:"crystals",
    amount:2,
    x:1000,
    y:500
}

];




// Draw items

function drawItems(){


droppedItems.forEach(item=>{


if(item.type==="wood")
ctx.fillStyle="brown";


if(item.type==="stone")
ctx.fillStyle="gray";


if(item.type==="crystals")
ctx.fillStyle="purple";



ctx.fillRect(

item.x,

item.y,

20,

20

);


});


}




// Collect items

function collectItems(){


droppedItems.forEach((item,index)=>{


let distance =
Math.hypot(

playerCharacter.x-item.x,

playerCharacter.y-item.y

);



if(distance < 50){


items[item.type] += item.amount;



droppedItems.splice(index,1);



alert(

"📦 Collected " +
item.amount +
" " +
item.type

);


}


});


}




// Add to game loop

let oldUpdate =
updateWorld;


updateWorld=function(){


oldUpdate();


collectItems();


drawItems();


};
