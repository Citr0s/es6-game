/// <reference path="./Transformation"/>
/// <reference path="./Appearance"/>

class SceneObject implements Entity {
    public transformation: Transformation;
    public appearance: Appearance;

    constructor(transformation:Transformation, appearance:Appearance) {
        this.transformation = transformation;
        this.appearance = appearance;
    }

    update(delta:number):void {
        this.transformation.update(delta);
    }

    draw():void {
        this.appearance.draw(this.transformation.position.x, this.transformation.position.y);
    }
}