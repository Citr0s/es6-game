import Physics from '../src/physics.class';

describe('Physics', function() {
   it('should initialise gravity correctly', function() {
       let subject = new Physics();

       expect(subject.forces['GRAVITY'].y).toBe(9.8);
   });
});