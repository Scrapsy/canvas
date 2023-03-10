export class TextHandler {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.size = 4;
        this.letters = [
            new LetterA(this.size),
            new LetterE(this.size),
            new LetterL(this.size),
            new LetterM(this.size),
            new LetterO(this.size)
        ];
    }

    draw(ctx) {
        for (var i = this.letters.length - 1; i >= 0; i--) {
            var cal_x = i*this.size*this.size+this.x;
            this.letters[i].draw(ctx, cal_x, this.y);
        }
    }
}
// AELMORSTUV
class Letter {
    constructor(size) {
        this.size = size;
    }
}

class LetterA extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(1*u+x, y);
        ctx.lineTo(2*u+x, y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(3*u+x, 1*u+y);
        ctx.lineTo(3*u+x, 5*u+y);
        ctx.lineTo(2*u+x, 5*u+y);
        ctx.lineTo(2*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 5*u+y);
        ctx.lineTo(x, 5*u+y);
        ctx.lineTo(x, 1*u+y);
        ctx.lineTo(1*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 2*u+y);
        ctx.lineTo(1*u+x, 2*u+y);
        ctx.lineTo(1*u+x, y);
        ctx.stroke();
    }
}

class LetterE extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(x, y);
        ctx.lineTo(3*u+x, y);
        ctx.lineTo(3*u+x, 1*u+y);
        ctx.lineTo(1*u+x, 1*u+y);
        ctx.lineTo(1*u+x, 2*u+y);
        ctx.lineTo(2*u+x, 2*u+y);
        ctx.lineTo(2*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 4*u+y);
        ctx.lineTo(3*u+x, 4*u+y);
        ctx.lineTo(3*u+x, 5*u+y);
        ctx.lineTo(x, 5*u+y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

class LetterL extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(x, y);
        ctx.lineTo(1*u+x, y);
        ctx.lineTo(1*u+x, 4*u+y);
        ctx.lineTo(3*u+x, 4*u+y);
        ctx.lineTo(3*u+x, 5*u+y);
        ctx.lineTo(3*u+x, 5*u+y);
        ctx.lineTo(x, 5*u+y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

class LetterM extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(x, y);
        ctx.lineTo(1*u+x, y);
        ctx.lineTo(1*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 0*u+y);
        ctx.lineTo(3*u+x, 0*u+y);
        ctx.lineTo(3*u+x, 5*u+y);
        ctx.lineTo(2*u+x, 5*u+y);
        ctx.lineTo(2*u+x, 2*u+y);
        ctx.lineTo(1.5*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 2*u+y);
        ctx.lineTo(1*u+x, 5*u+y);
        ctx.lineTo(x, 5*u+y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

class LetterO extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(1*u+x, y);
        ctx.lineTo(2*u+x, y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(3*u+x, 1*u+y);
        ctx.lineTo(3*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 5*u+y);
        ctx.lineTo(1*u+x, 5*u+y);
        ctx.lineTo(1*u+x, 4*u+y);
        ctx.lineTo(x, 4*u+y);
        ctx.lineTo(x, 1*u+y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 4*u+y);
        ctx.lineTo(1*u+x, 4*u+y);
        ctx.lineTo(1*u+x, y);
        ctx.stroke();
    }
}