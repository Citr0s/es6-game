/// <reference path="../src/Systems/PhysicsSystem"/>
/// <reference path="../src/Common/Entity"/>
/// <reference path="../src/Components/PhysicsComponent"/>

describe('Physics', function () {

    let component: PhysicsComponent;
    let physics: PhysicsSystem;
    let entity: Entity;

    beforeAll(function () {
        entity = new Entity();
        physics = new PhysicsSystem();

        let physicsData: PhysicsComponent = {
            name: ComponentType.PHYSICS,
            forces: {
                KINETIC_HORIZONTAL: new Vector(0, 0),
                KINETIC_VERTICAL: new Vector(0, 0),
                GRAVITY: new Vector(0, 9.8)
            },
            netForce: new Vector(0, 0)
        };

        entity.addComponent(physicsData);
        component = <PhysicsComponent>entity.getComponent(ComponentType.PHYSICS);
    });

    it('should initialise kinetic horizontal force correctly', function () {

        expect(component.forces['KINETIC_HORIZONTAL'].x).toBe(0);
        expect(component.forces['KINETIC_HORIZONTAL'].y).toBe(0);
    });

    it('should initialise kinetic vertical force correctly', function () {
        expect(component.forces['KINETIC_VERTICAL'].x).toBe(0);
        expect(component.forces['KINETIC_VERTICAL'].y).toBe(0);
    });

    it('should initialise gravity force correctly', function () {
        expect(component.forces['GRAVITY'].x).toBe(0);
        expect(component.forces['GRAVITY'].y).toBe(9.8);
    });

    it('should update force correctly', function () {
        component.forces["KINETIC_HORIZONTAL"] = new Vector(1, 2);

        expect(component.forces['KINETIC_HORIZONTAL'].x).toBe(1);
        expect(component.forces['KINETIC_HORIZONTAL'].y).toBe(2);
    });

    it('should calculate total force correctly', function () {
        component.forces["KINETIC_HORIZONTAL"] = new Vector(1, 2);
        component.forces["KINETIC_VERTICAL"] = new Vector(3, 4);
        component.forces["GRAVITY"] = new Vector(5, 6);

        physics.update([entity], 0);

        expect(component.netForce.x).toBe(9);
        expect(component.netForce.y).toBe(12);
    });
});