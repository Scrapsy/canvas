import { draw_frame } from "./bg/frame.js";
import { MainMenu } from "./stages/main_menu.js";
import { PC } from "./objects/pc.js";


var c = document.getElementById("region");
var ctx = c.getContext("2d");
var player = new PC();
//left, up, down, right
var controls = [false, false, false, false];

function keyDown(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        controls[3] = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        controls[0] = true;
    }
    if (e.key === "Up" || e.key === "ArrowUp") {
        controls[1] = true;
    } else if (e.key === "Down" || e.key === "ArrowDown") {
        controls[2] = true;
    }
}

function keyUp(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        controls[3] = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        controls[0] = false;
    }
    if (e.key === "Up" || e.key === "ArrowUp") {
        controls[1] = false;
    } else if (e.key === "Down" || e.key === "ArrowDown") {
        controls[2] = false;
    }
}

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

var current_stage = new MainMenu(player);

function main_loop() {
    ctx.beginPath();
    draw_frame(ctx);
    current_stage.draw(ctx);
    ctx.closePath();

    current_stage.action(controls);
}

setInterval(main_loop, 10);
