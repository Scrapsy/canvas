export class Stage1 {
    constructor(pc) {
        this.pc
    }

    draw(ctx) {
        this.pc.draw(ctx);
    }

    action(controls) {
        this.pc.think(controls)
    }
}
