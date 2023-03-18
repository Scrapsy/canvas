import { Framing } from "./../bg/frame.js";
import { ShipAngy } from "./../objects/baddies.js";
import { HealthBar, PC } from "./../objects/pc.js";
import { TextHandler } from "./../text/text.js";
import { MainMenu } from "./main_menu.js";

class BaseStage {
    constructor(pc) {
        this.pc = pc;
        this.pc.set_stage(this);
        this.bullets = [];
        this.baddies = [];
        this.spawn_baddies = [];
        this.effects = [];
        this.hp = new HealthBar(this.pc);
        this.frame = new Framing();
        this.failed = 100;
        this.failing = 0;
        this.failed_text = new TextHandler(" broke down", 55, 250, 4);
        this.won = 100;
        this.winning = 0;
        this.won_text = new TextHandler(" victory", 75, 250, 4);
        this.new_stage = false;
        this.timer = 0;
    }

    draw(ctx) {
        ctx.beginPath();
        this.frame.draw_background(ctx);
        ctx.closePath();

        ctx.beginPath();
        this.pc.draw(ctx);
        ctx.closePath();

        for (var i = this.bullets.length - 1; i >= 0; i--) {
            ctx.beginPath();
            this.bullets[i].draw(ctx);
            ctx.closePath();
        }

        for (var i = this.baddies.length - 1; i >= 0; i--) {
            ctx.beginPath();
            this.baddies[i].draw(ctx);
            ctx.closePath();
        }

        for (var i = this.effects.length - 1; i >= 0; i--) {
            ctx.beginPath();
            this.effects[i].draw(ctx);
            ctx.closePath();
        }

        ctx.beginPath();
        this.frame.draw_foreground(ctx);
        ctx.closePath();

        ctx.beginPath();
        this.hp.draw(ctx);
        ctx.closePath();

        if (this.failing >= 1) {
            ctx.beginPath();
            ctx.strokeStyle = "#FF00FF";
            this.failed_text.draw(ctx);
            ctx.closePath();
        }

        if (this.winning >= 1) {
            ctx.beginPath();
            ctx.strokeStyle = "#FF00FF";
            this.won_text.draw(ctx);
            ctx.closePath();
        }
    }

    action(controls) {
        if (this.failing < this.failed & this.winning < this.won) {
            this.timer += 1;

            if (this.pc.think(controls)) {
                this.failing += 1;
            } else {
                this.failing = 0;
            }

            if (this.baddies.length <= 0 & this.spawn_baddies.length <= 0) {
                this.winning += 1;
            } else {
                this.winning = 0;
            }

            while(0 < this.spawn_baddies.length && this.timer >= this.spawn_baddies[0][0]) {
                this.add_baddie(this.spawn_baddies.shift()[1]);
            }

            for (var i = this.bullets.length - 1; i >= 0; i--) {
                if (this.bullets[i].think()) {
                    this.bullets.splice(i, 1);
                }
            }

            for (var i = this.baddies.length - 1; i >= 0; i--) {
                if (this.baddies[i].think()) {
                    this.baddies.splice(i, 1);
                }
            }

            for (var i = this.effects.length - 1; i >= 0; i--) {
                if(this.effects[i].think()) {
                    this.effects.splice(i, 1);
                }
            }

            for (var i = this.bullets.length - 1; i >= 0; i--) {
                if (this.bullets[i].conflict([...this.baddies].concat([this.pc]))) {
                    this.bullets.splice(i, 1);
                }
            }

            for (var i = this.baddies.length - 1; i >= 0; i--) {
                if (this.baddies[i].conflict(this.pc)) {
                    this.baddies.splice(i, 1);
                }
            }
        } else {
            if (this.failing >= this.failed) {
                this.new_stage = new MainMenu(new PC());
            } else if (this.winning >= this.won) {
                this.new_stage = this.get_next_stage();
            }
        }
    }

    change_stage() {
        return this.new_stage;
    }

    add_baddie(ship) {
        this.baddies.push(ship);
    }

    add_bullet(bullet) {
        this.bullets.push(bullet);
    }

    add_effect(effect) {
        this.effects.push(effect);
    }
}

export class Stage1 extends BaseStage {
    constructor(pc) {
        super(pc);
        this.spawn_baddies = [
            [100, new ShipAngy(150, 0, this.pc, this)],
            [200, new ShipAngy(150, 0, this.pc, this)],
            [300, new ShipAngy(75, 0, this.pc, this)],
            [300, new ShipAngy(225, 0, this.pc, this)]
        ];
    }

    get_next_stage() {
        return new Stage2(this.pc);
    }
}

export class Stage2 extends BaseStage {
    constructor(pc) {
        super(pc);
        this.spawn_baddies = [
            [100, new ShipAngy(75, 0, this.pc, this)],
            [100, new ShipAngy(225, 0, this.pc, this)],
            [150, new ShipAngy(75, 0, this.pc, this)],
            [150, new ShipAngy(225, 0, this.pc, this)]
        ];
    }

    get_next_stage() {
        return new Stage1(this.pc);
    }
}