import { ShipAngy } from "./../objects/baddies.js";

export class Stage1 {
    constructor(pc) {
        this.pc = pc;
        this.bullets = [];
        this.baddies = [new ShipAngy(150, 0, this.pc)];
    }

    draw(ctx) {
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
    }

    action(controls) {
        this.pc.think(controls);

        var spawn = this.pc.spawn();
        if (spawn) {
            this.bullets.push(spawn);
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
    }

    change_stage() {
        return false;
    }
}
