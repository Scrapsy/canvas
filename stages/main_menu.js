import { Start } from "./buttons.js";

export class MainMenu {
    constructor(pc) {
        this.options = [new Start(150, 300)];
    }

    draw(ctx) {
        for (var i = this.options.length - 1; i >= 0; i--) {
            this.options[i].draw(ctx);
        }
    }

    action(controls) {

    }
}

/*

Buttons
    Start
    --Settings--
    Volume

Required letters
    AELMORSTUV
*/