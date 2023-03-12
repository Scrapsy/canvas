class BaseBullet {
    constructor(x, y, direction, alliance) {
        this.x=x; this.y=y; this.direction=direction;
        this.speed=4; this.alliance=alliance;
        this.size=4;
    }

    think() {
        var angle = (this.direction - 90) / 180 * Math.PI;
        this.x += this.speed * Math.cos(angle);
        this.y += this.speed * Math.sin(angle);

        return 0 > this.x || this.x > 300 ||
            0 > this.y || this.y > 600;
    }
}

export class Bullet extends BaseBullet {
    draw(ctx) {
        ctx.moveTo(this.x+this.size, this.y);
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        ctx.stroke();
    }
}