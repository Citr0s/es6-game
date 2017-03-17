class SceneObject {
    constructor(transformation, appearance) {
        this.transformation = transformation;
        this.appearance = appearance;
    }

    update(delta) {
        this.transformation.update(delta);
    }

    draw() {
        this.appearance.draw(this.transformation.position.x, this.transformation.position.y);
    }
}

export default SceneObject;