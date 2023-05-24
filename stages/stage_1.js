import { ShipAngy, ShipSpike, ShipShooter } from "./../objects/baddies.js";
import { PC } from "./../objects/pc.js";
import { BaseStage } from "./base_stage.js";
import { Stage2 } from "./stage_2.js";

export class Stage1 extends BaseStage {
    constructor(sound_box, globals) {
        var pc = new PC(globals);
        super(pc, sound_box, globals);
        this.spawn_baddies = [
            [100, new ShipAngy(150, 0, this.pc, this)],
            [150, new ShipAngy(150, 0, this.pc, this)],
            [200, new ShipAngy(75, 0, this.pc, this)],
            [200, new ShipAngy(225, 0, this.pc, this)],
            [250, new ShipSpike(100, 0, this.pc, this)],
            [250, new ShipSpike(200, 0, this.pc, this)],
            [300, new ShipShooter(300, 0, this.pc, this)],
            [300, new ShipShooter(340, 0, this.pc, this)],
        ];
        this.sound_box.music("song_one");
    }

    get_next_stage() {
        return new Stage2(this.sound_box, this.globals);
    }
}
