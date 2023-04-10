import { Effect } from "./effects.js";

class BaseBullet {
    constructor(x, y, direction, alliance, stage) {
        this.x=x; this.y=y; this.direction=direction;
        this.speed=4; this.alliance=alliance;
        this.size=4; this.color="#000";
        this.harm=1; this.has_struck=false;
        this.stage=stage;
    }

    think() {
        var angle = (this.direction - 90) / 180 * Math.PI;
        this.x += this.speed * Math.cos(angle);
        this.y += this.speed * Math.sin(angle);

        return this.has_struck ||
               0 > this.x || this.x > this.stage.globals.ctx.canvas.width ||
               0 > this.y || this.y > this.stage.globals.ctx.canvas.height;
    }

    conflict(baddies) {
        for (var i = baddies.length - 1; i >= 0; i--) {
            if (baddies[i].alliance != this.alliance) {
                if (baddies[i].x-baddies[i].size*baddies[i].width < this.x+this.size/2 &&
                    this.x-this.size/2 < baddies[i].x+baddies[i].size*baddies[i].width &&
                    baddies[i].y-baddies[i].size*baddies[i].height < this.y+this.size/2 &&
                    this.y-this.size/2 < baddies[i].y+baddies[i].size*baddies[i].height) {
                    this.deal_effect(baddies[i]);
                }
            }
        }
    }
}

export class Bullet extends BaseBullet {
    draw(ctx) {
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.x+this.size, this.y);
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        ctx.stroke();
    }

    deal_effect(ship) {
        this.has_struck = true;
        ship.damage += this.harm;

        this.stage.add_effect(new Effect(this.x, this.y));
    }
}