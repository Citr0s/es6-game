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

                collision.isColliding = this.checkForCollisionsWithBoundaries(transform, appearance, canvas.height, canvas.width);
            }
        }
    }

    draw(entities: Entity[]): void {
    }

    checkForCollisionsWithBoundaries(transformation: TransformComponent, appearance: AppearanceComponent, boundaryHeight: number, boundaryWidth: number): boolean {
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