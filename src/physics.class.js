import Force from './force.class';

class Physics {
    constructor() {
        this.forces = {
            "KINETIC_HORIZONTAL": new Force(0, 0),
            "KINETIC_VERTICAL": new Force(0, 0),
            "GRAVITY": new Force(0, 250)
        };
    }

    updateForce(key, force) {
        this.forces[key] = force;
    }

    calculateTotalForce() {
        let totalForce = { x: 0, y: 0 };

        for (let key in this.forces) {
            totalForce.x += this.forces[key].x;
            totalForce.y += this.forces[key].y;
        }

        return totalForce;
    }
}

export default Physics;