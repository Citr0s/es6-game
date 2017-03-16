import Vector from './vector.class';

class Transformation {
    constructor(physics, position, mass) {
        this.physics = physics;
        this.physics.updateForce("GRAVITY", new Vector(0, 98 * mass));
        this.position = position;
        this.velocity = new Vector(0, 0);
        this.mass = mass;
    }

    update(delta) {
        let force = this.physics.calculateTotalForce();
        let acceleration = new Vector(force.x / this.mass, force.y / this.mass);
        acceleration.multiply(delta);

        this.velocity.add(acceleration);

        this.position.x += this.velocity.x * delta + 0.5 * acceleration.x * Math.pow(delta, 2);
        this.position.y += this.velocity.y * delta + 0.5 * acceleration.y * Math.pow(delta, 2);
    }
}

export default Transformation;