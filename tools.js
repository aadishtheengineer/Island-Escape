// LOST ISLAND ONLINE - TOOL SYSTEM


let tools = [

{
    name:"Wood Pickaxe",
    type:"pickaxe",
    level:1,
    power:1
},

{
    name:"Stone Pickaxe",
    type:"pickaxe",
    level:2,
    power:2
},

{
    name:"Iron Pickaxe",
    type:"pickaxe",
    level:3,
    power:5
},

{
    name:"Diamond Pickaxe",
    type:"pickaxe",
    level:4,
    power:10
},

{
    name:"Mythic Pickaxe",
    type:"pickaxe",
    level:5,
    power:25
},


{
    name:"Wood Axe",
    type:"axe",
    level:1,
    power:1
},

{
    name:"Iron Axe",
    type:"axe",
    level:3,
    power:5
},

{
    name:"Dragon Axe",
    type:"axe",
    level:5,
    power:20
}

];



let equippedTool = tools[0];




// Equip tool

function equipTool(name){


let tool =
tools.find(
t=>t.name===name
);



if(tool){


equippedTool=tool;


alert(
"🛠️ Equipped " +
tool.name
);


}


}




// Upgrade tool

function upgradeTool(){


equippedTool.level++;

equippedTool.power+=5;


alert(

"⬆️ " +
equippedTool.name +
" upgraded!"

);


}




// Get mining power

function getMiningPower(){


return equippedTool.power;


}




// Show tools

function showTools(){


let text =
"🛠️ TOOLS\n\n";


tools.forEach(tool=>{


text +=

tool.name +
"\nLevel: " +
tool.level +
"\nPower: " +
tool.power +
"\n\n";


});


alert(text);


}
