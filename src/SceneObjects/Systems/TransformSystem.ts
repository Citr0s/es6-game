class TransformSystem implements ISystem {
    update(entities: Entity[], delta: number): void {
        for (let key in entities) {
            let entity = entities[key];

            if (entity.hasComponent(ComponentType.TRANSFORM)) {
                let component = <TransformComponent>entity.getComponent(ComponentType.TRANSFORM);
                let force = component.physics.calculateTotalForce();
                let acceleration = new Vector(force.x / component.mass, force.y / component.mass);
                acceleration.multiply(delta);

                component.velocity.add(acceleration);

                component.position.x += component.velocity.x * delta + 0.5 * acceleration.x * Math.pow(delta, 2);
                component.position.y += component.velocity.y * delta + 0.5 * acceleration.y * Math.pow(delta, 2);

                component.initialVelocity = component.velocity;
            }
        }
    }

    draw(entities: Entity[]): void {
    }
}