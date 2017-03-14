import InputHandler from './input-handler.class';
import Force from './force.class';

let canvas = document.getElementById('canvas');

class Player {
    constructor(transformation, appearance) {
        this.transformation = transformation;
        this.appearance = appearance;
    }

    update(delta) {
        if (InputHandler.checkKey("D")) {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Force(0.5, 0));
        } else {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Force(0, 0));
        }

        this.transformation.update(delta);
    }

    draw() {
        this.appearance.draw(this.transformation.x, this.transformation.y);

        if (this.transformation.y + this.appearance.height > canvas.height) {
            this.transformation.y = canvas.height - this.appearance.height;
            this.transformation.yVelocity = 0;
        }
    }
}

export default Player;