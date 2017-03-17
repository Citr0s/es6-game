/// <reference path="./Transformation"/>
/// <reference path="./Appearance"/>

class SceneObject {
    public transformation: Transformation;
    public appearance: Appearance;

    constructor(transformation:Transformation, appearance:Appearance) {
        this.transformation = transformation;
        this.appearance = appearance;
    }

    update(delta:number) {
        this.transformation.update(delta);
    }

    draw() {
        this.appearance.draw(this.transformation.position.x, this.transformation.position.y);
    }
}