export class TextHandler {
    constructor(text, x, y, size) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.size = size;
        this.letters = convert_text(text, this.size);
    }

    draw(ctx) {
        let cal_x = 0;
        for (let i = this.letters.length - 1; i >= 0; i--) {
            cal_x = i*this.size*this.size+this.x;
            this.letters[i].draw(ctx, cal_x, this.y);
        }
    }
}

function convert_text(text, size) {
    let letters = [];
    for (let i = text.length - 1; i >= 0; i--) {
        switch(text[i]) {
            case "a":
                letters.push(new LetterA(size));
                break;
            case "b":
                letters.push(new LetterB(size));
                break;
            case "c":
                letters.push(new LetterC(size));
                break;
            case "d":
                letters.push(new LetterD(size));
                break;
            case "e":
                letters.push(new LetterE(size));
                break;
            case "f":
                letters.push(new LetterF(size));
                break;
            case "g":
                letters.push(new LetterG(size));
                break;
            case "h":
                letters.push(new LetterH(size));
                break;
            case "i":
                letters.push(new LetterI(size));
                break;
            case "j":
                letters.push(new LetterJ(size));
                break;
            case "k":
                letters.push(new LetterK(size));
                break;
            case "l":
                letters.push(new LetterL(size));
                break;
            case "m":
                letters.push(new LetterM(size));
                break;
            case "n":
                letters.push(new LetterN(size));
                break;
            case "o":
                letters.push(new LetterO(size));
                break;
            case "p":
                letters.push(new LetterP(size));
                break;
            case "q":
                letters.push(new LetterQ(size));
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
            case "w":
                letters.push(new LetterW(size));
                break;
            case "x":
                letters.push(new LetterX(size));
                break;
            case "y":
                letters.push(new LetterY(size));
                break;
            case "z":
                letters.push(new LetterZ(size));
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
        this.lines = [];
    }

    draw(ctx, x, y) {
        ctx.moveTo(this.lines[0][0]*this.size+x, this.lines[0][1]*this.size+y);
        for (let i = this.lines.length - 1; i >= 0; i--) {
            ctx.lineTo(this.lines[i][0]*this.size+x, this.lines[i][1]*this.size+y);
        }
        ctx.stroke();
    }
}

class LetterSpace extends Letter {
    draw(ctx, x, y) { 
        ctx.stroke();
    }
}

class LetterA extends Letter {
    draw(ctx, x, y) {
        let u = this.size;
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
        let u = this.size;
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

class LetterC extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [1,0],
            [2,0],
            [2,1],
            [3,1],
            [3,2],
            [2,2],
            [2,1],
            [1,1],
            [1,4],
            [2,4],
            [2,3],
            [3,3],
            [3,4],
            [2,4],
            [2,5],
            [1,5],
            [1,4],
            [0,4],
            [0,1],
            [1,1],
            [1,0]
        ];
    }
}

class LetterD extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [0,0],
            [2,0],
            [2,4],
            [1,4],
            [1,1],
            [3,1],
            [3,4],
            [2,4],
            [2,5],
            [0,5],
            [0,0],
        ];
    }
}

class LetterE extends Letter {
    draw(ctx, x, y) {
        let u = this.size;
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

class LetterF extends Letter {
    draw(ctx, x, y) {
        let u = this.size;
        ctx.moveTo(x, y);
        ctx.lineTo(3*u+x, y);
        ctx.lineTo(3*u+x, 1*u+y);
        ctx.lineTo(1*u+x, 1*u+y);
        ctx.lineTo(1*u+x, 2*u+y);
        ctx.lineTo(2*u+x, 2*u+y);
        ctx.lineTo(2*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 3*u+y);
        ctx.lineTo(1*u+x, 5*u+y);
        ctx.lineTo(x, 5*u+y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

class LetterG extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [1,0],
            [2,0],
            [2,1],
            [3,1],
            [3,2],
            [2,2],
            [2,1],
            [1,1],
            [1,4],
            [2,4],
            [2,3],
            [3,3],
            [3,5],
            [1,5],
            [1,4],
            [0,4],
            [0,1],
            [1,1],
            [1,0],
        ];
    }
}

class LetterH extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [0,0],
            [1,0],
            [1,2],
            [2,2],
            [2,0],
            [3,0],
            [3,5],
            [2,5],
            [2,3],
            [1,3],
            [1,5],
            [0,5],
            [0,0],
        ];
    }
}

class LetterI extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [0,0],
            [3,0],
            [3,1],
            [2,1],
            [2,4],
            [3,4],
            [3,5],
            [0,5],
            [0,4],
            [1,4],
            [1,1],
            [0,1],
            [0,0],
        ];
    }
}

class LetterJ extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [2,0],
            [3,0],
            [3,4],
            [2,4],
            [2,5],
            [1,5],
            [1,4],
            [0,4],
            [0,3],
            [1,3],
            [1,4],
            [2,4],
            [2,0],
        ];
    }
}

class LetterK extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [0,0],
            [1,0],
            [1,2],
            [2,2],
            [2,0],
            [3,0],
            [3,2],
            [2,2],
            [2,3],
            [3,3],
            [3,5],
            [2,5],
            [2,3],
            [1,3],
            [1,5],
            [0,5],
            [0,0],
        ];
    }
}

class LetterL extends Letter {
    draw(ctx, x, y) {
        let u = this.size;
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
        let u = this.size;
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

class LetterN extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [0,0],
            [1,0],
            [1,1],
            [2,2],
            [2,0],
            [3,0],
            [3,5],
            [2,5],
            [2,3],
            [1,2],
            [1,5],
            [0,5],
            [0,0],
        ];
    }
}

class LetterO extends Letter {
    draw(ctx, x, y) {
        let u = this.size;
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

class LetterP extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [0,0],
            [2,0],
            [2,2],
            [1,2],
            [1,1],
            [3,1],
            [3,2],
            [2,2],
            [2,3],
            [1,3],
            [1,5],
            [0,5],
            [0,0],
        ];
    }
}

class LetterQ extends Letter {
    draw(ctx, x, y) {
        let u = this.size;
        ctx.moveTo(1*u+x, y);
        ctx.lineTo(2*u+x, y);
        ctx.lineTo(2*u+x, 1*u+y);
        ctx.lineTo(3*u+x, 1*u+y);
        ctx.lineTo(3*u+x, 5*u+y);
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
        let u = this.size;
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
        let u = this.size;
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
        let u = this.size;
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
        let u = this.size;
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
        let u = this.size;
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

class LetterW extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [0,0],
            [1,0],
            [1,3],
            [1.5,2],
            [2,3],
            [2,0],
            [3,0],
            [3,5],
            [2,5],
            [2,4],
            [1,4],
            [1,5],
            [0,5],
            [0,0]
        ];
    }
}

class LetterX extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [0,0],
            [1,0],
            [1,2],
            [2,2],
            [2,0],
            [3,0],
            [3,2],
            [2,2],
            [2,3],
            [3,3],
            [3,5],
            [2,5],
            [2,3],
            [1,3],
            [1,5],
            [0,5],
            [0,3],
            [1,3],
            [1,2],
            [0,2],
            [0,0]
        ];
    }
}

class LetterY extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [0,0],
            [1,0],
            [1,2],
            [2,2],
            [2,0],
            [3,0],
            [3,2],
            [2,2],
            [2,5],
            [1,5],
            [1,2],
            [0,2],
            [0,0]
        ];
    }
}

class LetterZ extends Letter {
    constructor(size) {
        super(size);
        this.lines = [
            [0,0],
            [3,0],
            [3,2],
            [2,2],
            [2,3],
            [1,3],
            [1,4],
            [3,4],
            [3,5],
            [0,5],
            [0,3],
            [1,3],
            [1,2],
            [2,2],
            [2,1],
            [0,1],
            [0,0],
        ];
    }
}