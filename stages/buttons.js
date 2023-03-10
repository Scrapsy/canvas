import { TextHandler } from "./../text/text.js";

class Button {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.is_highlighted = false;
        this.height = 30;
        this.width = 150;
    }

    highlighted(is_highlighted) {
        this.is_highlighted = is_highlighted;
    }

    draw(ctx) {
        ctx.moveTo(this.x - this.width/2, this.y - this.height/2);
        ctx.lineTo(this.x + this.width/2, this.y - this.height/2);
        ctx.lineTo(this.x + this.width/2, this.y + this.height/2);
        ctx.lineTo(this.x - this.width/2, this.y + this.height/2);
        ctx.lineTo(this.x - this.width/2, this.y - this.height/2);
        ctx.stroke();
    }
}



export class Start extends Button {
    constructor(x, y) {
        super(x, y);
        this.text = new TextHandler("start", x, y);
    }

    draw(ctx) {
        super.draw(ctx);
        this.text.draw(ctx);
    }

    action() {

    }
}