export class PC {
    constructor() {
        this.x=150; this.y=300; this.speed=1;
    }

    draw(ctx) {
        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.stroke();
    }

    think(controls) {
        if (controls[3]) {
            this.x += this.speed;
        }
        if (controls[0]) {
            this.x -= this.speed;
        }
        if (controls[2]) {
            this.y += this.speed;
        }
        if (controls[1]) {
            this.y -= this.speed;
        }
    }
}