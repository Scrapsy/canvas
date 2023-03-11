import { Stage1 } from "./stage_1.js";
import { Start } from "./buttons.js";
import { TextHandler } from "./../text/text.js";

export class MainMenu {
    constructor(pc) {
        this.options = [new Start(150, 350)];
        this.text_space = new TextHandler(" space", 33, 130, 6);
        this.text_game = new TextHandler(" game", 50, 180, 6);
        this.run_stage = false;
        this.pc = pc;
    }

    draw(ctx) {
        for (var i = this.options.length - 1; i >= 0; i--) {
            this.options[i].draw(ctx);
        }
        this.text_space.draw(ctx);
        this.text_game.draw(ctx);
    }

    action(controls) {
        this.run_stage = false;
        if (controls[4]) {
            this.run_stage = new Stage1(this.pc);
        }
    }

    change_stage() {
        return this.run_stage;
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