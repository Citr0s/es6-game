class TransformSystem implements ISystem {
    update(entities: Entity[], delta: number): void {
        for (let key in entities) {
            let entity = entities[key];

            if (entity.hasComponent(ComponentType.TRANSFORM)) {
                let transform = <TransformComponent>entity.getComponent(ComponentType.TRANSFORM);

                let acceleration = new Vector(0, 0);

                if (entity.hasComponent(ComponentType.PHYSICS)) {
                    let physics = <PhysicsComponent>entity.getComponent(ComponentType.PHYSICS);

                    let force = physics.netForce;
                    acceleration = new Vector(force.x / transform.mass, force.y / transform.mass);
                    acceleration.multiply(delta);
                }

                transform.velocity.add(acceleration);

                transform.position.x += transform.velocity.x * delta + 0.5 * acceleration.x * Math.pow(delta, 2);
                transform.position.y += transform.velocity.y * delta + 0.5 * acceleration.y * Math.pow(delta, 2);

                transform.initialVelocity = transform.velocity;
            }
        }
    }

    draw(entities: Entity[]): void {
    }
}