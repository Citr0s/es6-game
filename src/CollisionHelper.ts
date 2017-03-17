/// <reference path="./Vector"/>

class CollisionHelper {
    static collideWithCanvasBoundaries(object:Player, boundaries:HTMLCanvasElement) {
        if (object.transformation.position.y + object.appearance.height > boundaries.height) {
            object.transformation.position.y = boundaries.height - object.appearance.height;
            object.transformation.velocity.y = 0;
        }
        else if (object.transformation.position.y < 0) {
            object.transformation.position.y = 0;
            object.transformation.velocity.y = 0;
        }

        if (object.transformation.position.x + object.appearance.width > boundaries.width) {
            object.transformation.position.x = boundaries.width - object.appearance.width;
            object.transformation.velocity.x = 0;
        }
        else if (object.transformation.position.x < 0) {
            object.transformation.position.x = 0;
            object.transformation.velocity.x = 0;
        }
    }

    static collide(player:Player, box:SceneObject) {
        if (player.transformation.position.y < box.transformation.position.y + box.appearance.height
            && player.transformation.position.y + player.appearance.height > box.transformation.position.y
            && player.transformation.position.x < box.transformation.position.x + box.appearance.width
            && player.transformation.position.x + player.appearance.width > box.transformation.position.x) {

            player.transformation.velocity = new Vector(0, 0);
        }
    }
}