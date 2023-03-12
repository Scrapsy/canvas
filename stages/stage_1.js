export class Stage1 {
    constructor(pc) {
        this.pc = pc;
        this.bullet_list = [];
    }

    draw(ctx) {
        this.pc.draw(ctx);

        for (var i = this.bullet_list.length - 1; i >= 0; i--) {
            this.bullet_list[i].draw(ctx);
        }
    }

    action(controls) {
        this.pc.think(controls);

        var spawn = this.pc.spawn();
        if (spawn) {
            this.bullet_list.push(spawn);
        }

        for (var i = this.bullet_list.length - 1; i >= 0; i--) {
            if (this.bullet_list[i].think()) {
                this.bullet_list.splice(i, 1);
            }
        }
    }

    change_stage() {
        return false;
    }
}
