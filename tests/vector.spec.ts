/// <reference path="../src/Vector"/>

describe('Vector', function () {

    it('should initialise x and y correctly', function () {
        let subject = new Vector(1, 2);

        expect(subject.x).toBe(1);
        expect(subject.y).toBe(2);
    });

    it('should add x and y vectors together correctly', function () {
        let subject = new Vector(1, 2);

        subject.add(new Vector(1, 2));

        expect(subject.x).toBe(2);
        expect(subject.y).toBe(4);
    });

    it('should multiply x and y vectors together correctly', function () {
        let subject = new Vector(2, 3);

        subject.multiply(2);

        expect(subject.x).toBe(4);
        expect(subject.y).toBe(6);
    });
});