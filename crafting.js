// LOST ISLAND ONLINE - CRAFTING SYSTEM


let recipes = [

{
    name:"Stone Sword",
    materials:{
        stone:10,
        wood:5
    }
},

{
    name:"Iron Pickaxe",
    materials:{
        stone:25,
        crystals:5
    }
},

{
    name:"Wood House Kit",
    materials:{
        wood:50,
        stone:10
    }
},

{
    name:"Explorer Armor",
    materials:{
        crystals:20,
        stone:40
    }
}

];




// Check materials

function hasMaterials(recipe){


for(let material in recipe.materials){


if(
items[material] < recipe.materials[material]
){

return false;

}


}


return true;

}




// Remove materials

function removeMaterials(recipe){


for(let material in recipe.materials){


items[material] -=
recipe.materials[material];


}


}



// Craft item

function craftItem(number){


let recipe =
recipes[number];


if(!recipe){

alert("Recipe not found");

return;

}



if(hasMaterials(recipe)){


removeMaterials(recipe);



inventory.weapons.push(
recipe.name
);



alert(
"🔨 Crafted " + recipe.name
);



}

else{


alert(
"❌ Not enough materials!"
);


}


}




// Show recipes

function showCrafting(){


let text =
"🔨 CRAFTING RECIPES\n\n";


recipes.forEach((recipe,index)=>{


text +=

index +
": " +
recipe.name +
"\n";


});


alert(text);

}
