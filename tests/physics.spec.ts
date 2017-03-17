/// <reference path="../src/Physics"/>

describe('Physics', function() {

   it('should initialise kinetic horizontal force correctly', function() {
       let subject = new Physics();

       expect(subject.forces['KINETIC_HORIZONTAL'].x).toBe(0);
       expect(subject.forces['KINETIC_HORIZONTAL'].y).toBe(0);
   });

    it('should initialise kinetic vertical force correctly', function() {
        let subject = new Physics();

        expect(subject.forces['KINETIC_VERTICAL'].x).toBe(0);
        expect(subject.forces['KINETIC_VERTICAL'].y).toBe(0);
    });

    it('should initialise gravity force correctly', function() {
        let subject = new Physics();

        expect(subject.forces['GRAVITY'].x).toBe(0);
        expect(subject.forces['GRAVITY'].y).toBe(9.8);
    });

    it('should update force correctly', function() {
        let subject = new Physics();

        subject.updateForce("KINETIC_HORIZONTAL", new Vector(1, 2));

        expect(subject.forces['KINETIC_HORIZONTAL'].x).toBe(1);
        expect(subject.forces['KINETIC_HORIZONTAL'].y).toBe(2);
    });

    it('should calculate total force correctly', function() {
        let subject = new Physics();

        subject.updateForce("KINETIC_HORIZONTAL", new Vector(1, 2));
        subject.updateForce("KINETIC_VERTICAL", new Vector(3, 4));
        subject.updateForce("GRAVITY", new Vector(5, 6));

        expect(subject.calculateTotalForce().x).toBe(9);
        expect(subject.calculateTotalForce().y).toBe(12);
    });
});