///<reference path="../../Interfaces/ISystem.ts"/>

class CollisionSystem implements ISystem {
    update(entities: Entity[], delta: number): void {
        for (let key in entities) {
            let entity = entities[key];

            if (entity.hasComponent(ComponentType.COLLISION)) {
                let collision = <CollisionComponent>entity.getComponent(ComponentType.COLLISION);
                let transform = <TransformComponent>entity.getComponent(ComponentType.TRANSFORM);
                let appearance = <AppearanceComponent>entity.getComponent(ComponentType.APPEARANCE);
                let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

                for (let i = 0; i < entities.length; i++) {
                    if (i === parseInt(key))
                        continue;

                    this.collide(entities[key], entities[i]);
                }

                collision.isColliding = this.checkForCollisionsWithBoundaries(transform, appearance, canvas.height, canvas.width);
            }
        }
    }

    draw(entities: Entity[]): void {
    }

    private collide(entityOne: Entity, entityTwo: Entity) {
        let transformEntityOne = <TransformComponent>entityOne.getComponent(ComponentType.TRANSFORM);
        let transformEntityTwo = <TransformComponent>entityTwo.getComponent(ComponentType.TRANSFORM);

        if (this.areColliding(entityOne, entityTwo)) {
            let entityOneInitialVelocity = transformEntityOne.initialVelocity;
            let entityTwoInitialVelocity = transformEntityTwo.initialVelocity;
            let entityOneMass = transformEntityOne.mass;
            let entityTwoMass = transformEntityTwo.mass;

            transformEntityOne.velocity.x = ((entityOneMass - entityTwoMass) / (entityOneMass + entityTwoMass)) * entityOneInitialVelocity.x + ((2 * entityTwoMass) / (entityOneMass + entityTwoMass)) * entityTwoInitialVelocity.x;
            transformEntityOne.velocity.y = ((entityOneMass - entityTwoMass) / (entityOneMass + entityTwoMass)) * entityOneInitialVelocity.y + ((2 * entityTwoMass) / (entityOneMass + entityTwoMass)) * entityTwoInitialVelocity.y;
        }
    }

    private areColliding(entityOne: Entity, entityTwo: Entity) {
        let transformEntityOne = <TransformComponent>entityOne.getComponent(ComponentType.TRANSFORM);
        let appearanceEntityOne = <AppearanceComponent>entityOne.getComponent(ComponentType.APPEARANCE);
        let transformEntityTwo = <TransformComponent>entityTwo.getComponent(ComponentType.TRANSFORM);
        let appearanceEntityTwo = <AppearanceComponent>entityTwo.getComponent(ComponentType.APPEARANCE);

        return transformEntityOne.position.y < transformEntityTwo.position.y + appearanceEntityTwo.height
            && transformEntityOne.position.y + appearanceEntityOne.height > transformEntityTwo.position.y
            && transformEntityOne.position.x < transformEntityTwo.position.x + appearanceEntityTwo.width
            && transformEntityOne.position.x + appearanceEntityOne.width > transformEntityTwo.position.x;
    }

    private checkForCollisionsWithBoundaries(transformation: TransformComponent, appearance: AppearanceComponent, boundaryHeight: number, boundaryWidth: number): boolean {
        let isColliding = false;
        if (transformation.position.y + appearance.height > boundaryHeight) {
            transformation.position.y = boundaryHeight - appearance.height;
            transformation.velocity.y = 0;
            isColliding = true;
        }
        else if (transformation.position.y < 0) {
            transformation.position.y = 0;
            transformation.velocity.y = 0;
        }

        if (transformation.position.x + appearance.width > boundaryWidth) {
            transformation.position.x = boundaryWidth - appearance.width;
            transformation.velocity.x = 0;
        }
        else if (transformation.position.x < 0) {
            transformation.position.x = 0;
            transformation.velocity.x = 0;
        }

        return isColliding;
    }
}