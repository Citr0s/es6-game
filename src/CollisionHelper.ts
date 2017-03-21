/// <reference path="./Vector"/>

class CollisionHelper {
    static collideWithCanvasBoundaries(object: Entity, boundaries: HTMLCanvasElement) {
        object.isColliding = false;
        if (object.transformation.position.y + object.appearance.height > boundaries.height) {
            object.transformation.position.y = boundaries.height - object.appearance.height;
            object.transformation.velocity.y = 0;
            object.isColliding = true;
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

    static collide(entityOne: Entity, entityTwo: Entity) {
        if (this.areColliding(entityOne, entityTwo)) {
            let entityOneInitialVelocity = entityOne.transformation.initialVelocity;
            let entityTwoInitialVelocity = entityTwo.transformation.initialVelocity;
            let entityOneMass = entityOne.transformation.mass;
            let entityTwoMass = entityTwo.transformation.mass;

            entityOne.transformation.velocity.x = ((entityOneMass - entityTwoMass) / (entityOneMass + entityTwoMass)) * entityOneInitialVelocity.x + ((2 * entityTwoMass) / (entityOneMass + entityTwoMass)) * entityTwoInitialVelocity.x;
            entityOne.transformation.velocity.y = ((entityOneMass - entityTwoMass) / (entityOneMass + entityTwoMass)) * entityOneInitialVelocity.y + ((2 * entityTwoMass) / (entityOneMass + entityTwoMass)) * entityTwoInitialVelocity.y;
        }
    }


    private static areColliding(objectOne: Entity, objectTwo: Entity) {
        return objectOne.transformation.position.y < objectTwo.transformation.position.y + objectTwo.appearance.height
            && objectOne.transformation.position.y + objectOne.appearance.height > objectTwo.transformation.position.y
            && objectOne.transformation.position.x < objectTwo.transformation.position.x + objectTwo.appearance.width
            && objectOne.transformation.position.x + objectOne.appearance.width > objectTwo.transformation.position.x;
    }
}