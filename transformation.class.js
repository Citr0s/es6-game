class Transformation {
    constructor(x, y, physics) {
        this.x = x;
        this.y = y;
        this.physics = physics;

        this.xVelocity = 0;
        this.yVelocity = 0;
        this.mass = 10;
    }

    update(delta) {
        let force = this.physics.calculateTotalForce();
        let  acceleration = {
            x: force.x / this.mass,
            y: force.y / this.mass
        };

        this.xVelocity += acceleration.x * delta;
        this.yVelocity += acceleration.y * delta;

        this.x += this.xVelocity * delta + 0.5 * (-1) * acceleration.x * delta * delta;
        this.y += this.yVelocity * delta + 0.5 * (-1) * acceleration.y * delta * delta;
    }
}

export default Transformation;