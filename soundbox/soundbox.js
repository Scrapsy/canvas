export class SoundBox {
    constructor() {
        this.sounds = this.preload_sounds();
        this.change_volume(1.0);
    }

    change_volume(new_volume) {
        this.volume = new_volume;
        for(var key in this.sounds) {
            this.sounds[key].volume = this.volume;
        }
    }

    play(sound_title) {
        this.sounds[sound_title].play();
        this.sounds[sound_title].currentTime = 0;
        // TODO: allow same sound overlap
    }

    music(sound_title) {
        this.sounds[sound_title].play();
        this.sounds[sound_title].currentTime = 0;
        // TODO: Music should loop
        // TODO: When changing music, make sure to stop the last song
    }

    preload_sounds() {
        var sounds = {
            "mm3_s_s": new Audio("./soundbox/mm3_snakeman_stage.wav"),
            "mmx_r_s": new Audio("./soundbox/mmx_reg_shot.wav")
        };
        return sounds;
    }
}