/// <reference path="./Vector"/>

class Physics {
    public forces: any;
    constructor() {
        this.forces = {
            KINETIC_HORIZONTAL: new Vector(0, 0),
            KINETIC_VERTICAL: new Vector(0, 0),
            GRAVITY: new Vector(0, 9.8)
        };
    }

    updateForce(key:string, force:Vector) {
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