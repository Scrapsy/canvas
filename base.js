import { draw_frame } from "./bg/frame.js";
import { MainMenu } from "./stages/main_menu.js";
import { PC } from "./objects/pc.js";


var c = document.getElementById("region");
var ctx = c.getContext("2d");
var player = new PC();
//left, up, down, right, space
var controls = [false, false, false, false, false];

function keyDown(e) {
    if (e.keyCode === 39) {
        controls[3] = true;
    } else if (e.keyCode === 37) {
        controls[0] = true;
    }
    if (e.keyCode === 38) {
        controls[1] = true;
    } else if (e.keyCode === 40) {
        controls[2] = true;
    }
    if (e.keyCode === 32) {
        controls[4] = true;
    }
}

function keyUp(e) {
    if (e.keyCode === 39) {
        controls[3] = false;
    } else if (e.keyCode === 37) {
        controls[0] = false;
    }
    if (e.keyCode === 38) {
        controls[1] = false;
    } else if (e.keyCode === 40) {
        controls[2] = false;
    }
    if (e.keyCode === 32) {
        controls[4] = false;
    }
}

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

var current_stage = new MainMenu(player);
var new_stage = false;

function main_loop() {
    ctx.beginPath();
    draw_frame(ctx);
    current_stage.draw(ctx);
    ctx.closePath();

    current_stage.action(controls);
    new_stage = current_stage.change_stage();
    if (new_stage) {
        current_stage = new_stage;
    }
}

setInterval(main_loop, 10);
