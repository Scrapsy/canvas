import { ShipExplode } from "./effects.js";

class BaseShip {
    constructor(x, y, pc, stage) {
        this.x=x; this.y=y; this.speed=2; this.pc=pc; this.stage=stage;
        this.size=4; this.fire_rate=60; this.fire=this.fire_rate;
        this.alliance="unknown"; this.color="#FF00FF";
        this.width=2; this.height=2; this.damage=0; this.hp=1;
        this.harm=2;
        this.lines = [];
        this.stage_width = stage.globals.ctx.canvas.width;
        this.stage_height = stage.globals.ctx.canvas.height;
    }

    draw(ctx) {
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.lines[0][0]*this.size+this.x, this.lines[0][1]*this.size+this.y);
        for (var i = this.lines.length - 1; i >= 0; i--) {
            ctx.lineTo(this.lines[i][0]*this.size+this.x, this.lines[i][1]*this.size+this.y);
        }
        ctx.stroke();
    }

    think() {
        this.y += this.speed;

        if (this.fire >= 0) {
            this.fire -= 1;
        }
        if (this.hp <= this.damage) {
            this.explode();
        }
        return this.hp <= this.damage ||
               0 > this.x || this.x > this.stage_width ||
               0 > this.y || this.y > this.stage_height;
    }

    conflict(pc) {
        if (pc.alliance != this.alliance) {
            if (this.x-this.size*this.width < pc.x+pc.size*pc.width &&
                pc.x-pc.size*pc.width < this.x+this.size*this.width &&
                this.y-this.size*this.height < pc.y+pc.size*pc.height &&
                pc.y-pc.size*pc.height < this.y+this.size*this.height) {
                this.deal_effect(pc);
            }
        }
    }

    deal_effect(pc) {
        pc.damage += this.harm;
        this.damage = this.hp;
    }

    explode() {
        this.stage.add_effect(new ShipExplode(this.x, this.y));
        this.stage.play_sound_once("hurt");
    }

    spawn() {
        return false;
    }
}

export class ShipAngy extends BaseShip {
    constructor(x, y, pc, stage) {
        super(x, y, pc, stage);
        this.alliance="angy"; this.color="#0000FF";
        this.lines = [
            [-2, 2],
            [0, 1],
            [2, 2],
            [2, 0],
            [3, -2],
            [-3, -2],
            [-2, 0],
            [-2, 2],
        ];
    }

    draw(ctx) {
        super.draw(ctx);

        ctx.moveTo(-2*this.size+this.x, -1.9*this.size+this.y);
        ctx.lineTo(0*this.size+this.x, -3*this.size+this.y-(Math.random()*3));
        ctx.lineTo(2*this.size+this.x, -1.9*this.size+this.y);
        ctx.stroke();
    }
}

export class ShipSpike extends BaseShip {
    constructor(x, y, pc, stage) {
        super(x, y, pc, stage);
        this.speed=4;
        this.alliance="angy"; this.color="#0000FF";
        this.lines = [
            [-2, -2],
            [2, -2],
            [0, 3],
            [-2, -2],
        ];
    }
}
