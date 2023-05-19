import { MainMenu } from "./stages/main_menu.js";
import { SoundBox } from "./soundbox/soundbox.js";


var c = document.getElementById("region");
var ctx = c.getContext("2d");

var globals = class {
    ctx = false;
};
globals.ctx = ctx;
var sound_box = new SoundBox(globals);
var controls = class {
    is_left = false;
    is_right = false;
    is_up = false;
    is_down = false;
    is_space = false;
    is_plus = false;
    is_minus = false;
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
    if (e.keyCode === 32 || e.keyCode === 16) {
        controls.is_space = new_state;
    }

    if (e.key === '+') {
        controls.is_plus = new_state;
    }
    if (e.key === '-') {
        controls.is_minus = new_state;
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

var current_stage = new MainMenu(sound_box, globals);
var new_stage = false;

function main_loop() {
    current_stage.draw(ctx);

    current_stage.action(controls);
    sound_box.action(controls);

    new_stage = current_stage.change_stage();
    if (new_stage) {
        current_stage = new_stage;
    }
}

const UPDATES_PER_SECOND = 60;
const UPDATES_IN_MS = 1000/UPDATES_PER_SECOND;
setInterval(main_loop, UPDATES_IN_MS);
