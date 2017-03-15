import InputHandler from './input-handler.class';
import Vector from './vector.class';

let canvas = document.getElementById('canvas');

class Player {
    constructor(transformation, appearance) {
        this.transformation = transformation;
        this.appearance = appearance;
    }

    update(delta) {
        if (InputHandler.checkKey("D")) {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(500, 0));
        } else if (InputHandler.checkKey("A")) {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(-500, 0));
        } else if (InputHandler.checkKey("W")) {
            this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, -500));
        } else if (InputHandler.checkKey("S")) {
            this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, 500));
        } else {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(0, 0));
            this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, 0));
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