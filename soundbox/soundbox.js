export class SoundBox {
    volume = 0;
    currently_playing = "";

    did_plus = false;
    did_minus = false;
    last_change = 0;
    has_started = [];

    volumes = [0, 0.045, 0.096, 0.154, 0.221, 0.301, 0.397, 0.522, 0.698, 1];

    constructor(globals) {
        this.preload_sounds();
        this.preload_songs();
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

        for(var key in this.songs) {
            this.songs[key].volume = this.volumes[this.volume];
        }
    }

    play_once(sound_title) {
        if (this.has_started.indexOf(sound_title) < 0) {
            this.has_started.push(sound_title);
            this.play(sound_title);
        }
    }

    play(sound_title) {
        let sound = this.sounds[sound_title].cloneNode(true);
        sound.volume = this.volumes[this.volume];
        sound.play();
    }

    music(sound_title) {
        if (sound_title != this.currently_playing) {
            if (this.currently_playing != "") {
                this.songs[this.currently_playing].stop();
            }
            if (sound_title != "") {
                this.songs[sound_title].currentTime = 0;
                this.songs[sound_title].loop = true;
                this.songs[sound_title].play();
            }
            this.currently_playing = sound_title;
        }
    }

    preload_sounds() {
        this.sounds = {
            "regular_shot": new Audio("./soundbox/sounds/mmx_reg_shot.wav"),
            "hurt": new Audio("./soundbox/sounds/mmx_x_hurt.wav")
        };
    }

    preload_songs() {
        this.songs = {
            "song_one": new Audio("./soundbox/songs/mm3_snakeman_stage.wav")
        };
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
        this.has_started = [];
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