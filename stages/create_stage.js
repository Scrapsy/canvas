import { Framing } from "./../bg/frame.js";
import { ShipAngy, ShipShooter, ShipSpike } from "../objects/baddies.js";
import { TextHandler } from "./../text/text.js";

export class CreateStage {
    constructor(sound_box, globals) {
        this.sound_box = sound_box;
        this.globals = globals;
        this.frame = new Framing(globals);
        this.baddies = [];
        this.current_baddy = ShipAngy;
        this.stage_y = 0;

        this.text_ship = new TextHandler(this.current_baddy.name.toLowerCase(), 10, 440, 6);
    }

    draw(ctx) {
        ctx.beginPath();
        this.frame.draw_background(ctx);
        ctx.closePath();

        for (let i = this.baddies.length - 1; i >= 0; i--) {
            ctx.beginPath();
            this.baddies[i].draw(ctx);
            ctx.closePath();
        }

        ctx.beginPath();
        this.frame.draw_foreground(ctx);
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "#F00";
        this.text_ship.draw(ctx);
        ctx.closePath();
    }

    action(controls) {
        if (controls.did_mouse_left_click) {
            let baddy = new this.current_baddy(
                this.normalizePosition(controls.mouse_x),
                this.normalizePosition(controls.mouse_y),
                undefined,
                this
            );
            baddy.actual_y = baddy.y - this.stage_y;
            this.baddies.push(
                baddy
            );
        }

        if (controls.did_mouse_right_click) {
            let faux_pc = {
                damage: 0,
                alliance: "mouse",
                x: controls.mouse_x,
                y: controls.mouse_y,
                size: 1,
                width: 1,
                height: 1
            };

            for (let i = this.baddies.length - 1; i >= 0; i--) {
                if (this.baddies[i].conflict(faux_pc)) {
                    this.baddies.splice(i, 1);
                    break;
                }
            }
        }

        if (controls.did_scroll_up) {
            this.stage_y -= 10;
            this.updatePositions(-10);
        }
        if (controls.did_scroll_down) {
            this.stage_y += 10;
            this.updatePositions(10);
        }

        if (controls.is_one) {
            this.current_baddy = ShipAngy;
            this.text_ship.changeText(this.current_baddy.name.toLowerCase());
        }
        if (controls.is_two) {
            this.current_baddy = ShipShooter;
            this.text_ship.changeText(this.current_baddy.name.toLowerCase());
        }
        if (controls.is_three) {
            this.current_baddy = ShipSpike;
            this.text_ship.changeText(this.current_baddy.name.toLowerCase());
        }

        if (controls.is_down) {
            this.save();
        }
    }

    normalizePosition(pos) {
        return Math.floor(pos / 10) * 10;
    }

    updatePositions(pos_y) {
        for (let i = this.baddies.length - 1; i >= 0; i--) {
            this.baddies[i].y += pos_y;
        }
    }

    save() {
        let data = "this.spawn_baddies = [\n";

        this.baddies = this.baddies.sort((a, b) => {
            return a.actual_y - b.actual_y;
        });
        

        for (let i = 0; i <= this.baddies.length - 1; i++) {
            let b = this.baddies[i];
            data += "    [" + b.actual_y + ", new " + b.constructor.name + "("
            data += b.x + ", 0, this.pc, this)],\n";
        }

        data += "];";
        navigator.clipboard.writeText(data);
    }

    change_stage() {
        return false;
    }
}