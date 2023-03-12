import { Framing } from "./bg/frame.js";
import { MainMenu } from "./stages/main_menu.js";
import { PC } from "./objects/pc.js";


var c = document.getElementById("region");
var ctx = c.getContext("2d");

var player = new PC();
var controls = class {
    is_left = false;
    is_right = false;
    is_up = false;
    is_down = false;
    is_space = false;
};

function updateControl(e, new_state) {
    if (e.keyCode === 39 || e.keyCode === 68) {
        controls.is_right = new_state;
    } else if (e.keyCode === 37 || e.keyCode === 65) {
        controls.is_left = new_state;
    }
    if (e.keyCode === 38 || e.keyCode === 87) {
        controls.is_up = new_state;
    } else if (e.keyCode === 40 || e.keyCode === 83) {
        controls.is_down = new_state;
    }
    if (e.keyCode === 32) {
        controls.is_space = new_state;
    }
}

function keyDown(e) {
    updateControl(e, true);
}

function keyUp(e) {
    updateControl(e, false);
}

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

var frame = new Framing();
var current_stage = new MainMenu(player);
var new_stage = false;

function main_loop() {
    ctx.beginPath();
    frame.draw_background(ctx);
    ctx.closePath();
    ctx.beginPath();
    current_stage.draw(ctx);
    ctx.closePath();
    ctx.beginPath();
    frame.draw_foreground(ctx);
    ctx.closePath();

    current_stage.action(controls);
    new_stage = current_stage.change_stage();
    if (new_stage) {
        current_stage = new_stage;
    }
}

setInterval(main_loop, 10);
