/// <reference path="./Vector"/>
/// <reference path="./Physics"/>

class Transformation {
    public physics: Physics;
    public position: Vector;
    public velocity: Vector;
    private mass: number;

    constructor(physics:Physics, position:Vector, mass:number) {
        this.physics = physics;
        this.physics.updateForce("GRAVITY", new Vector(0, 98 * mass));
        this.position = position;
        this.velocity = new Vector(0, 0);
        this.mass = mass;
    }

    update(delta:number) {
        let force = this.physics.calculateTotalForce();
        let acceleration = new Vector(force.x / this.mass, force.y / this.mass);
        acceleration.multiply(delta);

        this.velocity.add(acceleration);

        this.position.x += this.velocity.x * delta + 0.5 * acceleration.x * Math.pow(delta, 2);
        this.position.y += this.velocity.y * delta + 0.5 * acceleration.y * Math.pow(delta, 2);
    }
}