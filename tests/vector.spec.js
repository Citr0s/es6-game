import Vector from '../src/vector.class';

describe('Vector', function() {
   it('should add two numbers', function() {
       let subject = new Vector(1, 1);

       expect(subject.x).toBe(1);
       expect(subject.y).toBe(1);
   });
});