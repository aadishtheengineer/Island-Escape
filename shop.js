// LOST ISLAND ONLINE - SHOP SYSTEM


let shopOpen = false;



let shopItems = [

{
name:"Stone Pickaxe",
type:"tool",
cost:200
},

{
name:"Iron Pickaxe",
type:"tool",
cost:1000
},

{
name:"Explorer Armor",
type:"armor",
cost:1500
},

{
name:"Wolf Pet",
type:"pet",
cost:5000
},

{
name:"Dragon Pet",
type:"pet",
cost:50000
}

];



// Open shop

function openShop(){


shopOpen=true;


let message =
"🛒 LOST ISLAND SHOP\n\n";


message +=
"Type buy(number) in console for now\n\n";


shopItems.forEach((item,index)=>{


message +=
index +
": " +
item.name +
" - 💎 " +
item.cost +
"\n";


});


alert(message);


}



// Buy shop item

function buyShopItem(index){


let item =
shopItems[index];


if(!item){

alert("Item not found");

return;

}



if(player.gems >= item.cost){


player.gems -= item.cost;



if(item.type==="tool"){

player.pickaxe=item.name;

}



if(item.type==="armor"){

player.armor=item.name;

}



if(item.type==="pet"){

player.pet=item.name;

}



updateHUD();



alert(
"✅ Bought " + item.name
);



}

else{


alert(
"❌ Need more gems!"
);


}


}



// Developer shop unlock

function unlockShopAll(){


shopItems.forEach(item=>{


item.cost=0;


});


alert(
"⭐ Developer Shop Activated"
);


}
