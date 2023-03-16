class BaseShip {
    constructor(x, y, pc) {
        this.x=x; this.y=y; this.speed=1; this.pc=pc;
        this.size=4; this.fire_rate=60; this.fire=this.fire_rate;
        this.alliance="unknown"; this.color="#FF00FF";
        this.width=2; this.height=2; this.damage=0; this.hp=1;
        this.harm=2;
        this.lines = [];
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
        if (this.hp <= this.damage) {
            this.explode();
        }
        return this.hp <= this.damage ||
               0 > this.x || this.x > 300 ||
               0 > this.y || this.y > 600;
    }

    conflict(pc) {
        if (pc.alliance != this.alliance) {
            if (this.x-this.size*this.width < pc.x &&
                pc.x < this.x+this.size*this.width &&
                this.y-this.size*this.height < pc.y &&
                pc.y < this.y+this.size*this.height) {
                this.deal_effect(pc);
            }
        }
    }
}

export class Template extends BaseShip {
    constructor() {
    }

    draw(ctx) {
    }

    think() {
        return super.think();
    }

    spawn() {
        return false;
    }
}

export class ShipAngy extends BaseShip {
    constructor(x, y, pc) {
        super(x, y, pc);
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

    think() {
        this.y += this.speed;

        if (this.fire >= 0) {
            this.fire -= 1;
        }

        return super.think();
    }

    deal_effect(pc) {
        pc.damage += this.harm;
        this.damage = this.hp;
    }

    explode() {
        // TODO: Add death-effect
    }

    spawn() {
        return false;
    }
}