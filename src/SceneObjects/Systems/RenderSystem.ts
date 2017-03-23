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

                Renderer.drawRect(transform.position.x, transform.position.y, appearance.width, appearance.height);
            }
        }
    }
}