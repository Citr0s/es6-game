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

                collision.isColliding = this.checkForCollisionsWithBoundries(transform, appearance, canvas.height, canvas.width);
            }
        }
    }

    draw(entities: Entity[]): void {
    }

    checkForCollisionsWithBoundries(transformation: TransformComponent, appearance: AppearanceComponent, boundryHeight: number, boundryWidth: number): boolean {
        let isColliding = false;
        if (transformation.position.y + appearance.height > boundryHeight) {
            transformation.position.y = boundryHeight - appearance.height;
            transformation.velocity.y = 0;
            isColliding = true;
        }
        else if (transformation.position.y < 0) {
            transformation.position.y = 0;
            transformation.velocity.y = 0;
        }

        if (transformation.position.x + appearance.width > boundryWidth) {
            transformation.position.x = boundryWidth - appearance.width;
            transformation.velocity.x = 0;
        }
        else if (transformation.position.x < 0) {
            transformation.position.x = 0;
            transformation.velocity.x = 0;
        }

        return isColliding;
    }
}