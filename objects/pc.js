import { Bullet } from "./bullet.js";

export class PC {
    constructor() {
        this.x=150; this.y=500; this.speed=2;
        this.size=4; this.fire_rate=60; this.fire=this.fire_rate;
        this.alliance="pc"; this.color="#000";
        this.width=2; this.height=2; this.hp=3; this.damage=0;

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
        this.controls = false;
    }

    draw(ctx) {
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.lines[0][0]*this.size+this.x, this.lines[0][1]*this.size+this.y);
        for (var i = this.lines.length - 1; i >= 0; i--) {
            ctx.lineTo(this.lines[i][0]*this.size+this.x, this.lines[i][1]*this.size+this.y);
        }
        ctx.stroke();

        var flame_force = 3;
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
        } else if (295-this.size*2 < this.x) {
            this.x = 295-this.size*2;
        }

        if (this.y < 5+this.size*2) {
            this.y = 5+this.size*2;
        } else if (550-this.size*2 < this.y) {
            this.y = 550-this.size*2;
        }

        if (this.fire >= 0) {
            this.fire -= 1;
        }

        if (this.hp <= this.damage) {
            // TODO: Add death-effect and loose screen
        }
    }

    spawn() {
        if (this.fire <= 0 & this.controls.is_space) {
            this.fire = this.fire_rate;
            return new Bullet(this.x, this.y, 0, this.alliance);
        }
        return false;
    }
}