///<reference path="./ISystem.ts"/>

class SpriteSystem implements ISystem {
    update(entities: Entity[], delta: number): void {
        for (let key in entities) {
            let entity = entities[key];

            if (entity.hasComponent(ComponentType.SPRITE)) {
                let component = <SpriteComponent>entity.getComponent(ComponentType.SPRITE);

                component.currentAnimationTick += delta;

                if (component.currentAnimationTick >= component.animationCycle / component.frameCount) {
                    component.currentAnimationTick = 0;
                    component.currentFrame++;
                }

                if (component.currentFrame >= component.frameCount)
                    component.currentFrame = 0;

                if (InputHandler.checkKey(InputMappings.MOVE_RIGHT()))
                    component.direction = 3;

                if (InputHandler.checkKey(InputMappings.MOVE_LEFT()))
                    component.direction = 1;

                if (InputHandler.checkKey(InputMappings.MOVE_UP()))
                    component.direction = 0;

                if (InputHandler.checkKey(InputMappings.MOVE_DOWN()))
                    component.direction = 2;
            }
        }
    }

    draw(entities: Entity[]): void {
    }
}