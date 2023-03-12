export class PC {
    constructor() {
        this.x=150; this.y=500; this.speed=2;
        this.size=4; this.fire_rate=10; this.fire=0;
        this.lines = [
            [-2, -2],
            [0, -1],
            [2, -2],
            [2, 0],
            [3, 2],
            [-3, 2],
            [-2, 0],
            [-2, -2],
        ];
        this.controls = [false, false, false, false, false];
    }

    draw(ctx) {
        ctx.moveTo(this.lines[0][0]*this.size+this.x, this.lines[0][1]*this.size+this.y);
        for (var i = this.lines.length - 1; i >= 0; i--) {
            ctx.lineTo(this.lines[i][0]*this.size+this.x, this.lines[i][1]*this.size+this.y);
        }
        ctx.stroke();

        var flame_force = 3;
        if (this.controls[1]) {
            flame_force = 4;
        } else if (this.controls[2]) {
            flame_force = 2;
        }

        ctx.moveTo(-2*this.size+this.x, 1.9*this.size+this.y);
        ctx.lineTo(0*this.size+this.x, flame_force*this.size+this.y+Math.random()*3);
        ctx.lineTo(2*this.size+this.x, 1.9*this.size+this.y);

        ctx.stroke();
    }

    think(controls) {
        this.controls = controls;
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

        if (this.fire >= 0) {
            this.fire -= 1;
        }

        if (this.fire <= 0 & controls[4]) {
            this.fire = this.fire_rate;
            // BULLETTE!
        }
    }
}