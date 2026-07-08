let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

function startGame(){

    document.getElementById("menu").style.display = "none";

    ctx.fillStyle = "green";

    ctx.fillRect(
        400,
        200,
        50,
        50
    );

}
