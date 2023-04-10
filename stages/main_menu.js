import { Stage1 } from "./stage_1.js";
import { Start } from "./buttons.js";
import { TextHandler } from "./../text/text.js";
import { Framing } from "./../bg/frame.js";

export class MainMenu {
    constructor(pc, sound_box, globals) {
        this.options = [new Start(150, 350)];
        this.text_space = new TextHandler(" space", 33, 130, 6);
        this.text_game = new TextHandler(" game", 50, 180, 6);
        this.run_stage = false;
        this.pc = pc;
        this.frame = new Framing(globals);
        this.sound_box = sound_box;
        this.globals = globals;
    }

    draw(ctx) {
        ctx.beginPath();
        this.frame.draw_background(ctx);
        ctx.closePath();

        ctx.beginPath();
        for (var i = this.options.length - 1; i >= 0; i--) {
            this.options[i].draw(ctx);
        }
        this.text_space.draw(ctx);
        this.text_game.draw(ctx);
        ctx.closePath();

        ctx.beginPath();
        this.frame.draw_foreground(ctx);
        ctx.closePath();
    }

    action(controls) {
        this.run_stage = false;
        if (controls.is_space) {
            this.run_stage = new Stage1(this.pc, this.sound_box, this.globals);
        }
        // TODO: Add volume control
    }

    change_stage() {
        return this.run_stage;
    }
}
