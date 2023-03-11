export class PC {
    constructor() {
        this.x=150; this.y=500; this.speed=2;
        this.size=4;
        this.lines = [
            [-2, -2],
            [2, -2],
            [2, 2],
            [-2, 2],
            [-2, -2],
        ];
    }

    draw(ctx) {
        ctx.moveTo(this.lines[0][0]*this.size+this.x, this.lines[0][1]*this.size+this.y);
        for (var i = this.lines.length - 1; i >= 0; i--) {
            ctx.lineTo(this.lines[i][0]*this.size+this.x, this.lines[i][1]*this.size+this.y);
        }
        ctx.stroke();
    }

    think(controls) {
        if (controls[3]) { // Right
            this.x += this.speed;
        }
        if (controls[0]) { // Left
            this.x -= this.speed;
        }
        if (controls[2]) { // Down
            this.y += this.speed/2;
        }
        if (controls[1]) { // Up
            this.y -= this.speed/2;
        }
    }
}