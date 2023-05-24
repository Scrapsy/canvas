import { Bullet } from "./bullet.js";
import { ShipExplode } from "./effects.js";

export class PC {
    constructor(globals) {
        this.x=320; this.y=410; this.speed=4;
        this.size=4; this.fire_rate=10; this.fire=this.fire_rate;
        this.alliance="pc"; this.color="#000";
        this.width=2; this.height=2; this.hp=3; this.damage=0;
        this.controls=false; this.stage=false;
        this.globals = globals;

        this.lines = [
            [-2, -2],
            [0, -3],
            [2, -2],
            [2, 0],
            [3, 2],
            [-3, 2],
            [-2, 0],
            [-2, -2],
        ];
    }

    set_stage(stage) {
        this.stage = stage;
    }

    draw(ctx) {
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.lines[0][0]*this.size+this.x, this.lines[0][1]*this.size+this.y);
        for (let i = this.lines.length - 1; i >= 0; i--) {
            ctx.lineTo(this.lines[i][0]*this.size+this.x, this.lines[i][1]*this.size+this.y);
        }
        ctx.stroke();

        let flame_force = 3;
        if (this.controls) {
            if (this.controls.is_up) {
                flame_force = 4;
            } else if (this.controls.is_down) {
                flame_force = 2;
            }
        }

        ctx.moveTo(-2*this.size+this.x, 1.9*this.size+this.y);
        ctx.lineTo(0*this.size+this.x, flame_force*this.size+this.y+Math.random()*3);
        ctx.lineTo(2*this.size+this.x, 1.9*this.size+this.y);

        ctx.stroke();
    }

    think(controls) {
        this.controls = controls;
        if (controls.is_right) { // Right
            this.x += this.speed;
        }
        if (controls.is_left) { // Left
            this.x -= this.speed;
        }
        if (controls.is_down) { // Down
            this.y += this.speed/2;
        }
        if (controls.is_up) { // Up
            this.y -= this.speed/2;
        }

        if (this.x < 5+this.size*2) {
            this.x = 5+this.size*2;
        } else if (this.globals.ctx.canvas.width-5-this.size*2 < this.x) {
            this.x = this.globals.ctx.canvas.width-5-this.size*2;
        }

        if (this.y < 5+this.size*2) {
            this.y = 5+this.size*2;
        } else if (this.globals.ctx.canvas.height-50-this.size*2 < this.y) {
            this.y = this.globals.ctx.canvas.height-50-this.size*2;
        }

        if (this.fire >= 0) {
            this.fire -= 1;
        }

        if (this.hp <= this.damage) {
            this.stage.add_effect(new ShipExplode(this.x, this.y));
        }

        if (this.fire <= 0 & this.controls.is_space) {
            this.fire = this.fire_rate;
            this.stage.add_bullet(new Bullet(this.x, this.y, 0, this.alliance, this.stage));
            this.stage.play_sound("regular_shot");
        }
        return this.hp <= this.damage;
    }
}

export class HealthBar {
    constructor(pc) {
        this.pc = pc;
        this.x = 15;
        this.y = 445;
        this.width = 75;
        this.height = 20;
    }

    draw(ctx) {
        ctx.fillStyle = "#111";
        ctx.fillRect(this.x, this.y, this.width, this.height);

        if (this.pc.damage <= this.pc.hp) {
            ctx.fillStyle = `rgb(
                ${200*(this.pc.damage/this.pc.hp)},
                ${200*(1-(this.pc.damage/this.pc.hp))},
                0
            )`;
            ctx.fillRect(this.x, this.y, this.width*(1-(this.pc.damage/this.pc.hp)), this.height);

            ctx.fillStyle = `rgb(
                ${255*(this.pc.damage/this.pc.hp)},
                ${255*(1-(this.pc.damage/this.pc.hp))},
                0
            )`;
            ctx.fillRect(this.x, this.y, this.width*(1-(this.pc.damage/this.pc.hp)), this.height/6);

            ctx.fillStyle = `rgb(
                ${100*(this.pc.damage/this.pc.hp)},
                ${100*(1-(this.pc.damage/this.pc.hp))},
                0
            )`;
            ctx.fillRect(this.x, this.y+this.height-this.height/6, this.width*(1-(this.pc.damage/this.pc.hp)), this.height/6);
        }

        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x+this.width, this.y);
        ctx.lineTo(this.x+this.width, this.y+this.height);
        ctx.lineTo(this.x, this.y+this.height);
        ctx.lineTo(this.x, this.y);

        for (let i = this.pc.hp; i >= 0; i--) {
            ctx.moveTo(this.x+this.width*(1-(i/this.pc.hp)), this.y);
            ctx.lineTo(this.x+this.width*(1-(i/this.pc.hp)), this.y+this.height);
        }

        ctx.strokeStyle = "#777";
        ctx.stroke();
    }
}