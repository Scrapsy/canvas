import { Stage1 } from "./stage_1.js";
import { Start } from "./buttons.js";
import { TextHandler } from "./../text/text.js";
import { Framing } from "./../bg/frame.js";

export class MainMenu {
    constructor(sound_box, globals) {
        this.options = [
            new Start(globals.ctx.canvas.width/2, 300),
        ];
        this.text_space = new TextHandler(" space", globals.ctx.canvas.width/2-117, 130, 6);
        this.text_game = new TextHandler(" game", globals.ctx.canvas.width/2-100, 180, 6);
        this.run_stage = false;
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
            this.run_stage = new Stage1(this.sound_box, this.globals);
        }
    }

    change_stage() {
        return this.run_stage;
    }
}
