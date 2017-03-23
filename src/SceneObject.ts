/// <reference path="./Transformation"/>
/// <reference path="./Appearance"/>

class SceneObject implements Object {
    public transformation: Transformation;
    public appearance: Appearance;
    public isColliding: boolean;

    constructor(transformation: Transformation, appearance: Appearance) {
        this.transformation = transformation;
        this.appearance = appearance;
        this.isColliding = false;
    }

    update(delta: number): void {
        this.transformation.update(delta);
    }

    draw(): void {
        this.appearance.draw(this.transformation.position.x, this.transformation.position.y);
    }
}