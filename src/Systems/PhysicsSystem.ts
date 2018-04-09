///<reference path="./ISystem.ts"/>

class PhysicsSystem implements ISystem {
    update(entities: Entity[], delta: number): void {
        for (let key in entities) {
            let entity = entities[key];

            if (entity.hasComponent(ComponentType.PHYSICS)) {
                let component = <PhysicsComponent>entity.getComponent(ComponentType.PHYSICS);

                let totalForce = new Vector(0, 0);

                for (let forceKey in component.forces) {
                    totalForce.add(component.forces[forceKey]);
                }

                component.netForce = totalForce;
            }
        }
    }

    draw(entities: Entity[]): void {
    }
}