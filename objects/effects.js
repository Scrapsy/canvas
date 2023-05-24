class BaseEffect {
    constructor(x, y) {
        this.x=x; this.y=y;
        this.timer=0;
        this.life_time=5;
        this.is_spent=false;
    }

    think() {
        this.timer += 1;
        this.is_spent = this.life_time<=this.timer;
    }
}

export class Effect extends BaseEffect {
    constructor(x, y) {
        super(x, y);
        this.rad=5;
    }

    draw(ctx) {
        ctx.fillStyle = "#333";
        ctx.strokeStyle = "#000";
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

export class ShipExplode extends BaseEffect {
    constructor(x, y) {
        super(x, y);
        this.rad=5;
        this.life_time=15;
        this.booms = [
            [0, this.x + Math.random()*8-4, this.y + Math.random()*8-4],
            [5, this.x + Math.random()*8-4, this.y + Math.random()*8-4],
            [10, this.x + Math.random()*8-4, this.y + Math.random()*8-4]
        ];
    }

    draw(ctx) {
        ctx.fillStyle = "#333";
        ctx.strokeStyle = "#000";

        for (let i = this.booms.length - 1; i >= 0; i--) {
            if(this.booms[i][0] < this.timer) {
                ctx.arc(this.booms[i][1], this.booms[i][2], this.rad, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
            }
        }
    }
}