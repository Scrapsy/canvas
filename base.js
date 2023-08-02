import { MainMenu } from "./stages/main_menu.js";
import { SoundBox } from "./soundbox/soundbox.js";
import { controller } from "./utilities/controller.js";

import { CreateStage } from "./stages/create_stage.js";


let c = document.getElementById("region");
let ctx = c.getContext("2d");

let globals = class {
    ctx = false;
};
globals.ctx = ctx;
let sound_box = new SoundBox(globals);

let current_stage = new MainMenu(sound_box, globals);
// let current_stage = new CreateStage(sound_box, globals);
let new_stage = false;

function main_loop() {
    current_stage.draw(ctx);

    current_stage.action(controller);
    sound_box.action(controller);

    new_stage = current_stage.change_stage();
    if (new_stage) {
        current_stage = new_stage;
    }

    controller.action();
}

const UPDATES_PER_SECOND = 60;
const UPDATES_IN_MS = 1000/UPDATES_PER_SECOND;
setInterval(main_loop, UPDATES_IN_MS);
