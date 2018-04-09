///<reference path="../../Interfaces/ISystem.ts"/>

class MovementSystem implements ISystem {
    update(entities: Entity[], delta: number): void {
        for (let key in entities) {
            let entity = entities[key];

            if (entity.hasComponent(ComponentType.MOVEMENT)) {
                let physics = <PhysicsComponent>entity.getComponent(ComponentType.PHYSICS);
                let collision = <CollisionComponent>entity.getComponent(ComponentType.COLLISION);

                physics.forces["KINETIC_HORIZONTAL"] = new Vector(0, 0);
                physics.forces["KINETIC_VERTICAL"] = new Vector(0, 0);

                if (InputHandler.checkKey(InputMappings.MOVE_RIGHT()))
                    physics.forces["KINETIC_HORIZONTAL"] = new Vector(500, 0);

                if (InputHandler.checkKey(InputMappings.MOVE_LEFT()))
                    physics.forces["KINETIC_HORIZONTAL"] = new Vector(-500, 0);

                if (InputHandler.checkKey(InputMappings.MOVE_UP()) && collision.isColliding)
                    physics.forces["KINETIC_VERTICAL"] = new Vector(0, -80000);

                if (InputHandler.checkKey(InputMappings.MOVE_DOWN()))
                    physics.forces["KINETIC_VERTICAL"] = new Vector(0, 500);
            }
        }
    }

    draw(entities: Entity[]): void {
    }
}