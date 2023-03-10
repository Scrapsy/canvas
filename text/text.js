export class TextHandler {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.size = 4;
        this.letters = convert_text(text, this.size);
    }

    draw(ctx) {
        for (var i = this.letters.length - 1; i >= 0; i--) {
            var cal_x = i*this.size*this.size+this.x;
            this.letters[i].draw(ctx, cal_x, this.y);
        }
    }
}

function convert_text(text, size) {
    var letters = [];
    for (var i = text.length - 1; i >= 0; i--) {
        switch(text[i]) {
            case "a":
                letters.push(new LetterA(size));
                break;
            case "b":
                letters.push(new LetterB(size));
                break;
            case "e":
                letters.push(new LetterE(size));
                break;
            case "l":
                letters.push(new LetterL(size));
                break;
            case "m":
                letters.push(new LetterM(size));
                break;
            case "o":
                letters.push(new LetterO(size));
                break;
            case "r":
                letters.push(new LetterR(size));
                break;
            case "s":
                letters.push(new LetterS(size));
                break;
            case "t":
                letters.push(new LetterT(size));
                break;
            case "u":
                letters.push(new LetterU(size));
                break;
            case "v":
                letters.push(new LetterV(size));
                break;
            case " ":
                letters.push(new LetterSpace(size));
                break;
        }
    }
    return letters.reverse();
}

// AELMORSTUV
class Letter {
    constructor(size) {
        this.size = size;
    }
}

class LetterSpace extends Letter {
    draw(ctx, x, y) { 
        ctx.stroke();
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

class LetterB extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(x, y);
        ctx.lineTo(2*u+x, y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(3*u+x, 1*u+y);
        ctx.lineTo(3*u+x, 2*u+y);
        ctx.lineTo(2*u+x, 2*u+y);
        ctx.lineTo(2*u+x, 3*u+y);
        ctx.lineTo(3*u+x, 3*u+y);
        ctx.lineTo(3*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 5*u+y);
        ctx.lineTo(x, 5*u+y);
        ctx.lineTo(x, y);
        ctx.moveTo(1*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 2*u+y);
        ctx.lineTo(1*u+x, 2*u+y);
        ctx.lineTo(1*u+x, 1*u+y);
        ctx.moveTo(1*u+x, 3*u+y);
        ctx.lineTo(2*u+x, 3*u+y);
        ctx.lineTo(2*u+x, 4*u+y);
        ctx.lineTo(1*u+x, 4*u+y);
        ctx.lineTo(1*u+x, 3*u+y);
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

class LetterR extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(x, y);
        ctx.lineTo(2*u+x, y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(3*u+x, 1*u+y);
        ctx.lineTo(3*u+x, 2*u+y);
        ctx.lineTo(2*u+x, 2*u+y);
        ctx.lineTo(2*u+x, 3*u+y);
        ctx.lineTo(3*u+x, 3*u+y);
        ctx.lineTo(3*u+x, 5*u+y);
        ctx.lineTo(2*u+x, 5*u+y);
        ctx.lineTo(2*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 5*u+y);
        ctx.lineTo(x, 5*u+y);
        ctx.lineTo(x, y);
        ctx.moveTo(1*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 2*u+y);
        ctx.lineTo(1*u+x, 2*u+y);
        ctx.lineTo(1*u+x, 1*u+y);
        ctx.stroke();
    }
}

class LetterS extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(1*u+x, y);
        ctx.lineTo(3*u+x, y);
        ctx.lineTo(3*u+x, 1*u+y);
        ctx.lineTo(1*u+x, 1*u+y);
        ctx.lineTo(1*u+x, 2*u+y);
        ctx.lineTo(2*u+x, 2*u+y);
        ctx.lineTo(2*u+x, 3*u+y);
        ctx.lineTo(3*u+x, 3*u+y);
        ctx.lineTo(3*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 5*u+y);
        ctx.lineTo(x, 5*u+y);
        ctx.lineTo(x, 4*u+y);
        ctx.lineTo(2*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 2*u+y);
        ctx.lineTo(x, 2*u+y);
        ctx.lineTo(x, 1*u+y);
        ctx.lineTo(1*u+x, 1*u+y);
        ctx.lineTo(1*u+x, y);
        ctx.stroke();
    }
}

class LetterT extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(x, y);
        ctx.lineTo(3*u+x, y);
        ctx.lineTo(3*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(2*u+x, 5*u+y);
        ctx.lineTo(1*u+x, 5*u+y);
        ctx.lineTo(1*u+x, 1*u+y);
        ctx.lineTo(x, 1*u+y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

class LetterU extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(x, y);
        ctx.lineTo(1*u+x, y);
        ctx.lineTo(1*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 4*u+y);
        ctx.lineTo(2*u+x, y);
        ctx.lineTo(3*u+x, y);
        ctx.lineTo(3*u+x, 5*u+y);
        ctx.lineTo(x, 5*u+y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

class LetterV extends Letter {
    draw(ctx, x, y) {
        var u = this.size;
        ctx.moveTo(x, y);
        ctx.lineTo(1*u+x, y);
        ctx.lineTo(1*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 4*u+y);
        ctx.lineTo(2*u+x, y);
        ctx.lineTo(3*u+x, y);
        ctx.lineTo(3*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 4*u+y);
        ctx.lineTo(2*u+x, 5*u+y);
        ctx.lineTo(1*u+x, 5*u+y);
        ctx.lineTo(1*u+x, 4*u+y);
        ctx.lineTo(x, 4*u+y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}