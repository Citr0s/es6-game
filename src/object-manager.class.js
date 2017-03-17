import Player from './player.class';
import Transformation from './transformation.class';
import Appearance from './appearance.class';
import Physics from './physics.class';
import Vector from './vector.class';
import CollisionHelper from './collision-helper.class';
import SceneObject from './scene-object.class';

let canvas = document.getElementById('canvas');

class ObjectManager {
    constructor() {
        this.player = new Player(new Transformation(new Physics(), new Vector(100, 100), 1), new Appearance(50, 50));
        this.box = new SceneObject(new Transformation(new Physics(), new Vector(canvas.width / 2, canvas.height - 150), 1), new Appearance(150, 150));
    }

    update(delta) {
        CollisionHelper.collideWithCanvasBoundaries(this.player, canvas);
        CollisionHelper.collideWithCanvasBoundaries(this.box, canvas);
        this.player.update(delta);
        this.box.update(delta);
    }

    draw() {
        this.player.draw();
        this.box.draw();
    }
}

export default ObjectManager;