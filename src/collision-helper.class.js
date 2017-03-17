class CollisionHelper {
    constructor() {
    }

    static collideWithCanvasBoundaries(object, boundaries) {
        if (object.transformation.position.y + object.appearance.height > boundaries.height) {
            object.transformation.position.y = boundaries.height - object.appearance.height;
            object.transformation.velocity.y = 0;
        }
        else if (object.transformation.position.y < 0) {
            object.transformation.position.y = 0;
            object.transformation.velocity.y = 0
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
}

export default CollisionHelper;