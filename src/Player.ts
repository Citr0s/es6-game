/// <reference path="./InputHandler"/>
/// <reference path="./Vector"/>
/// <reference path="./InputMappings"/>

class Player implements Entity {
    public transformation: Transformation;
    public appearance: IAppearance;
    public isColliding: boolean;

    constructor(transformation: Transformation, appearance: IAppearance) {
        this.transformation = transformation;
        this.appearance = appearance;
        this.isColliding = false;
    }

    update(delta: number) {
        this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(0, 0));
        this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, 0));

        if (InputHandler.checkKey(InputMappings.MOVE_RIGHT())) {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(500, 0));
        }

        if (InputHandler.checkKey(InputMappings.MOVE_LEFT())) {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(-500, 0));
        }

        if (InputHandler.checkKey(InputMappings.MOVE_UP()) && this.isColliding) {
            this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, -7500));
        }

        if (InputHandler.checkKey(InputMappings.MOVE_DOWN())) {
            this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, 500));
        }

        this.transformation.update(delta);
        this.appearance.update(delta);
    }

    draw() {
        this.appearance.draw(this.transformation.position.x, this.transformation.position.y);
    }
}