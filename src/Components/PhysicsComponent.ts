///<reference path="./IComponent.ts"/>
///<reference path="../Common/Vector.ts"/>
///<reference path="../Common/ComponentType.ts"/>

class PhysicsComponent implements IComponent {
    public name: ComponentType;
    public forces: any;
    public netForce: Vector;
}