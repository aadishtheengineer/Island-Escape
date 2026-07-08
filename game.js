let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

let gameRunning = false;


function startGame(){

    gameRunning = true;

    document.getElementById("menu").style.display="none";

    gameLoop();

}


function gameLoop(){

    if(!gameRunning) return;


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle="green";

    ctx.fillRect(
        400,
        200,
        50,
        50
    );


    requestAnimationFrame(gameLoop);

}
