/// <reference path="./InputHandler"/>
/// <reference path="./Vector"/>
/// <reference path="./InputMappings"/>

class Player implements Entity{
    public transformation: Transformation;
    public appearance: Appearance;
    private direction: number;
    
    constructor(transformation:Transformation, appearance:Appearance) {
        this.transformation = transformation;
        this.appearance = appearance;
        this.direction = 0;
    }

    update(delta:number) {
        this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(0, 0));
        this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, 0));

        if (InputHandler.checkKey(InputMappings.MOVE_RIGHT())) {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(500, 0));
            this.direction = 3;
        }

        if (InputHandler.checkKey(InputMappings.MOVE_LEFT())) {
            this.transformation.physics.updateForce("KINETIC_HORIZONTAL", new Vector(-500, 0));
            this.direction = 1;
        }

        if (InputHandler.checkKey(InputMappings.MOVE_UP())) {
            this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, -500));
            this.direction = 0;
        }

        if (InputHandler.checkKey(InputMappings.MOVE_DOWN())) {
            this.transformation.physics.updateForce("KINETIC_VERTICAL", new Vector(0, 500));
            this.direction = 2;
        }

        this.transformation.update(delta);
    }

    draw() {
        //this.appearance.draw(this.transformation.position.x, this.transformation.position.y);
        this.appearance.drawSprite(this.transformation.position.x, this.transformation.position.y, 65, 65, "./assets/sampleAsset.png", this.direction);
    }
}