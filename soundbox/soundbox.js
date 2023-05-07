export class SoundBox {
    constructor(globals) {
        this.sounds = this.preload_sounds();
        this.volume = 0;

        this.did_plus = false;
        this.did_minus = false;
        this.last_change = 0;

        this.volumes = [0, 0.045, 0.096, 0.154, 0.221, 0.301, 0.397, 0.522, 0.698, 1]
        this.change_volume(1);
    }

    change_volume(change) {
        this.volume += change;
        if (this.volume > this.volumes.length - 1) {
            this.volume = this.volumes.length - 1;
        }
        else if (this.volume < 0) {
            this.volume = 0;
        }

        for(var key in this.sounds) {
            this.sounds[key].volume = this.volumes[this.volume];
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
        // TODO: If changing to song that is already playing, do NOT restart
    }

    preload_sounds() {
        var sounds = {
            "mm3_s_s": new Audio("./soundbox/mm3_snakeman_stage.wav"),
            "mmx_r_s": new Audio("./soundbox/mmx_reg_shot.wav")
        };
        return sounds;
    }

    action(controls) {
        if (controls.is_plus && !this.did_plus) {
            this.change_volume(1);
            this.last_change = 90;
        }
        if (controls.is_minus && !this.did_minus) {
            this.change_volume(-1);
            this.last_change = 90;
        }
        this.did_plus = controls.is_plus;
        this.did_minus = controls.is_minus;
        if (this.last_change > 0) {
            this.last_change -= 1;
        }
    }

    draw(ctx) {
        if (this.last_change > 0) {
            ctx.fillStyle = "#fff";
            ctx.fillRect(5, 5, 100, 15);

            ctx.strokeStyle = "#333";

            ctx.moveTo(5, 5);
            ctx.lineTo(105, 5);
            ctx.lineTo(105, 20);
            ctx.lineTo(5, 20);
            ctx.lineTo(5, 5);
            ctx.stroke();

            ctx.fillStyle = "#0d0";
            ctx.fillRect(5, 5, this.volume*10, 15);
        }
    }
}