import Vector from './vector.class';

class Physics {
    constructor() {
        this.forces = {
            "KINETIC_HORIZONTAL": new Vector(0, 0),
            "KINETIC_VERTICAL": new Vector(0, 0),
            "GRAVITY": new Vector(0, 250)
        };
    }

    updateForce(key, force) {
        this.forces[key] = force;
    }

    calculateTotalForce() {
        let totalForce = new Vector(0, 0);

        for (let key in this.forces) {
            totalForce.add(this.forces[key]);
        }

        return totalForce;
    }
}

export default Physics;