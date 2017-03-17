import InputHandler from './input-handler.class';
import Vector from './vector.class';
import InputMappings from './input-mappings.class';

class Player {
    constructor(transformation, appearance) {
        this.transformation = transformation;
        this.appearance = appearance;
    }

    update(delta) {
        this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(0, 0));
        this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, 0));

        if (InputHandler.checkKey(InputMappings.MOVE_RIGHT)) {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(500, 0));
        }

        if (InputHandler.checkKey(InputMappings.MOVE_LEFT)) {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(-500, 0));
        }

        if (InputHandler.checkKey(InputMappings.MOVE_UP)) {
            this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, -500));
        }

        if (InputHandler.checkKey(InputMappings.MOVE_DOWN)) {
            this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, 500));
        }

        this.transformation.update(delta);
    }

    draw() {
        this.appearance.draw(this.transformation.position.x, this.transformation.position.y);
    }
}

export default Player;