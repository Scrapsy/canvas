export class Controller {
    is_left = false;
    is_right = false;
    is_up = false;
    is_down = false;
    is_space = false;
    is_plus = false;
    is_minus = false;

    is_one = false;
    is_two = false;
    is_three = false;
    is_four = false;

    mouse_x = 0;
    mouse_y = 0;
    is_mouse_left_down = false;
    is_mouse_left_up = true;
    did_mouse_left_click = false;
    is_mouse_right_up = true;
    is_mouse_right_down = false;
    did_mouse_right_click = false;

    did_scroll_up = false;
    did_scroll_down = false;

    rect = undefined;

    constructor(canvas) {
        this.rect = canvas.getBoundingClientRect();
    }

    updateControl(e, new_state) {
        if (e.keyCode === 39 || e.keyCode === 68) {
            this.is_right = new_state;
        } else if (e.keyCode === 37 || e.keyCode === 65) {
            this.is_left = new_state;
        }
        if (e.keyCode === 38 || e.keyCode === 87) {
            this.is_up = new_state;
        } else if (e.keyCode === 40 || e.keyCode === 83) {
            this.is_down = new_state;
        }
        if (e.keyCode === 32 || e.keyCode === 16) {
            this.is_space = new_state;
        }
    
        if (e.key === '+') {
            this.is_plus = new_state;
        }
        if (e.key === '-') {
            this.is_minus = new_state;
        }

        if (e.key === '1') {
            this.is_one = new_state;
        }
        if (e.key === '2') {
            this.is_two = new_state;
        }
        if (e.key === '3') {
            this.is_three = new_state;
        }
        if (e.key === '4') {
            this.is_four = new_state;
        }
    }

    updateMouse(e, push_down) {
        if (e.button === 0) {
            this.is_mouse_left_down = push_down;
            this.did_mouse_left_click = push_down;
            this.is_mouse_left_up = !push_down;
        } else if (e.button === 2) {
            this.is_mouse_right_down = push_down;
            this.did_mouse_right_click = push_down;
            this.is_mouse_right_up = !push_down;
        }
        this.mouse_x = e.clientX - this.rect.left;
        this.mouse_y = e.clientY - this.rect.top;
    }

    updateMouseScroll(e) {
        if (e.deltaY < 0) {
            this.did_scroll_up = true;
        } else {
            this.did_scroll_down = true;
        }
    }

    action() {
        this.did_scroll_up = false;
        this.did_scroll_down = false;
        this.did_mouse_left_click = false;
        this.did_mouse_right_click = false;
    }
}

let canvas = document.getElementById("region");
export var controller = new Controller(canvas);

function mouseDown(e) {
    controller.updateMouse(e, true);
}

function mouseUp(e) {
    controller.updateMouse(e, false);
}

function mouseScroll(e) {
    controller.updateMouseScroll(e);
}

function keyDown(e) {
    controller.updateControl(e, true);
}

function keyUp(e) {
    controller.updateControl(e, false);
}

console.log("This should only be seen once");

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);
canvas.addEventListener("wheel", mouseScroll);
canvas.addEventListener("contextmenu", event => event.preventDefault());
