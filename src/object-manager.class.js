import Player from './player.class';
import Transformation from './transformation.class';
import Appearance from './appearance.class';
import Physics from './physics.class';
import Vector from './vector.class';
import CollisionHelper from './collision-helper.class';

let canvas = document.getElementById('canvas');

class ObjectManager {
    constructor() {
        this.player = new Player(new Transformation(new Physics(), new Vector(100, 100), 1), new Appearance(50, 50));
    }

    update(delta) {
        CollisionHelper.collideWithCanvasBoundaries(this.player, canvas);
        this.player.update(delta);
    }

    draw() {
       this.player.draw();
    }
}

export default ObjectManager;