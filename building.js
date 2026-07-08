// LOST ISLAND ONLINE - BUILDING SYSTEM


let materials = {

    wood:20,
    stone:10

};



let buildings = [];



// Blocks

let buildBlocks = [

{
    name:"Wood Wall",
    cost:"wood"
},

{
    name:"Stone Wall",
    cost:"stone"
}

];



// Place building

function placeBlock(type,x,y){


let block = buildBlocks[type];


if(!block){

return;

}



if(materials[block.cost] > 0){


materials[block.cost]--;


buildings.push({

x:x,
y:y,
type:block.name

});


}

else{


alert(
"❌ Need more materials!"
);


}


}




// Remove building

function removeBlock(x,y){


buildings =
buildings.filter(block=>{


return !(
Math.abs(block.x-x)<30 &&
Math.abs(block.y-y)<30
);


});


}



// Draw buildings

function drawBuildings(){


buildings.forEach(block=>{


if(block.type==="Wood Wall"){


ctx.fillStyle="#8B4513";


}


if(block.type==="Stone Wall"){


ctx.fillStyle="gray";


}



ctx.fillRect(

block.x,

block.y,

40,

40

);


});


}




// Mouse building

canvas.addEventListener(
"click",
function(event){


let x =
event.clientX;


let y =
event.clientY;



placeBlock(

0,

x,

y

);


});




// Add building to world

let oldDrawWorld = drawWorld;


drawWorld=function(){


oldDrawWorld();


drawBuildings();


};
