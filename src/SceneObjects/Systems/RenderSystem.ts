///<reference path="../../Interfaces/ISystem.ts"/>

class RenderSystem implements ISystem {
    update(entities: Entity[], delta: number): void {

    }

    draw(entities: Entity[]): void {
        for (let key in entities) {
            let entity = entities[key];

            if (entity.hasComponent(ComponentType.APPEARANCE) && entity.hasComponent(ComponentType.TRANSFORM)) {
                let appearance = <AppearanceComponent>entity.getComponent(ComponentType.APPEARANCE);
                let transform = <TransformComponent>entity.getComponent(ComponentType.TRANSFORM);
                let sprite = <SpriteComponent>entity.getComponent(ComponentType.SPRITE);

                if (sprite) {
                    Renderer.drawSprite(transform.position.x, transform.position.y, appearance.width, appearance.height, 65, 65, sprite.picture, sprite.direction, sprite.currentFrame);
                    return;
                }

                Renderer.drawRect(transform.position.x, transform.position.y, appearance.width, appearance.height);
            }
        }
    }
}