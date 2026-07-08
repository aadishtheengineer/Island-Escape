// LOST ISLAND ONLINE - CONFIG SYSTEM


let gameConfig = {


    gameName:"Lost Island Online",


    version:"1.0.0",


    startingGems:0,


    startingHealth:100,


    maxPlayersPerServer:10,


    worldSize:5000,


    dayLength:120,


    nightLength:120,


    difficulty:"Normal"


};





// Change difficulty

function setDifficulty(level){


    gameConfig.difficulty = level;


    alert(
        "⚔️ Difficulty set to " + level
    );


}





// Change server size

function setServerLimit(amount){


    gameConfig.maxPlayersPerServer =
    amount;


}





// Show settings

function showConfig(){


    alert(

        "🎮 " +
        gameConfig.gameName +

        "\nVersion: " +
        gameConfig.version +

        "\nDifficulty: " +
        gameConfig.difficulty

    );


}
