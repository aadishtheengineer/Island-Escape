// LOST ISLAND ONLINE - WEAPON SYSTEM


let weapons = [

{
    name:"Wood Sword",
    rarity:"Common",
    damage:10,
    ability:"None"
},

{
    name:"Stone Sword",
    rarity:"Uncommon",
    damage:25,
    ability:"Rock Strike"
},

{
    name:"Iron Sword",
    rarity:"Rare",
    damage:50,
    ability:"Power Slash"
},

{
    name:"Fire Sword",
    rarity:"Epic",
    damage:100,
    ability:"Burn Damage"
},

{
    name:"Ice Sword",
    rarity:"Epic",
    damage:150,
    ability:"Freeze Enemy"
},

{
    name:"Lightning Blade",
    rarity:"Legendary",
    damage:300,
    ability:"Lightning Attack"
},

{
    name:"Dragon Sword",
    rarity:"Mythic",
    damage:600,
    ability:"Dragon Fire"
},

{
    name:"Celestial Blade",
    rarity:"Ultimate",
    damage:1000,
    ability:"Star Explosion"
}

];




// Upgrade weapon

function upgradeWeapon(name){


let weapon =
weapons.find(
w => w.name === name
);



if(weapon){


weapon.damage += 25;


alert(

"⬆️ " +
name +
" upgraded!"

);


}


}




// Get weapon stats

function getWeaponDamage(name){


let weapon =
weapons.find(
w => w.name === name
);



if(weapon){

return weapon.damage;

}


return 10;

}




// Show weapons

function showWeapons(){


let text =
"⚔️ WEAPONS\n\n";


weapons.forEach(w=>{


text +=

w.name +
" - " +
w.rarity +
"\nDamage: " +
w.damage +
"\nAbility: " +
w.ability +
"\n\n";


});


alert(text);

}
