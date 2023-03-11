export class Stage1 {
    constructor(pc) {
        this.pc = pc;
    }

    draw(ctx) {
        this.pc.draw(ctx);
    }

    action(controls) {
        this.pc.think(controls)
    }

    change_stage() {
        return false;
    }
}
