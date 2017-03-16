import Vector from '../src/vector.class';

describe('Vector', function() {
   it('should initialise x correctly', function() {
       let subject = new Vector(1, 1);

       expect(subject.x).toBe(1);
   });

    it('should initialise y correctly', function() {
        let subject = new Vector(1, 1);

        expect(subject.y).toBe(1);
    });
});