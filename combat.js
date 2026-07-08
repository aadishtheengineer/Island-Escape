// LOST ISLAND ONLINE - COMBAT SYSTEM


let combatStats = {

    damage:10,

    defense:0,

    criticalChance:0.1

};



// Weapon damage

let weaponStats = {

"Wood Sword":10,

"Stone Sword":20,

"Iron Sword":40,

"Fire Sword":80,

"Ice Sword":120,

"Dragon Sword":300,

"Celestial Blade":1000

};





// Player attack

function attackEnemy(enemy){


let damage =
weaponStats[player.weapon] || 10;



// Critical hit

if(Math.random() < combatStats.criticalChance){


damage *= 2;


alert("💥 Critical Hit!");

}


enemy.health -= damage;



}



// Enemy attack

function enemyAttack(enemy){


let damage = 5;


damage -= combatStats.defense;


if(damage < 0){

damage=0;

}



player.health -= damage;


updateHUD();



}




// Upgrade defense

function upgradeArmor(){


combatStats.defense +=10;


alert(
"🛡️ Armor upgraded!"
);


}




// Heal player

function healPlayer(){


player.health=100;


updateHUD();


alert(
"❤️ Healed!"
);


}
