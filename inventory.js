// LOST ISLAND ONLINE - INVENTORY SYSTEM


let inventory = {

    weapons:[
        "Wood Sword"
    ],

    items:[],

    currentWeapon:"Wood Sword"

};



let weaponShop = [

{
    name:"Wood Sword",
    cost:0,
    damage:10
},

{
    name:"Stone Sword",
    cost:100,
    damage:20
},

{
    name:"Iron Sword",
    cost:500,
    damage:40
},

{
    name:"Fire Sword",
    cost:2500,
    damage:80
},

{
    name:"Ice Sword",
    cost:5000,
    damage:120
},

{
    name:"Dragon Sword",
    cost:25000,
    damage:300
}

];




// Buy weapon

function buyWeapon(number){

    let weapon = weaponShop[number];


    if(player.gems >= weapon.cost){


        player.gems -= weapon.cost;


        inventory.weapons.push(
            weapon.name
        );


        updateHUD();


        alert(
            "⚔️ Bought " + weapon.name
        );


    }

    else{

        alert("❌ Not enough gems!");

    }

}




// Equip weapon

function equipWeapon(name){


if(inventory.weapons.includes(name)){


inventory.currentWeapon=name;

player.weapon=name;


updateHUD();


alert(
"Equipped " + name
);


}

}



// Open inventory

function openInventory(){


let list="🎒 Weapons:\n\n";


inventory.weapons.forEach(item=>{

list += "⚔️ " + item + "\n";

});


alert(list);


}



// Developer gets all weapons

function giveAllWeapons(){


weaponShop.forEach(item=>{


if(!inventory.weapons.includes(item.name)){


inventory.weapons.push(item.name);


}


});


updateHUD();

}
