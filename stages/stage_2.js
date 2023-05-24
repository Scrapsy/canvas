import { ShipAngy, ShipSpike } from "./../objects/baddies.js";
import { PC } from "./../objects/pc.js";
import { BaseStage } from "./base_stage.js";
import { Stage1 } from "./stage_1.js";

export class Stage2 extends BaseStage {
    constructor(sound_box, globals) {
        let pc = new PC(globals);
        super(pc, sound_box, globals);
        this.spawn_baddies = [
            [100, new ShipAngy(75, 0, this.pc, this)],
            [100, new ShipAngy(225, 0, this.pc, this)],
            [125, new ShipAngy(75, 0, this.pc, this)],
            [125, new ShipAngy(225, 0, this.pc, this)]
        ];
    }

    get_next_stage() {
        return new Stage1(this.sound_box, this.globals);
    }
}
