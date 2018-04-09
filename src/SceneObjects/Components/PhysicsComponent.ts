///<reference path="./IComponent.ts"/>
///<reference path="../../Vector.ts"/>
///<reference path="../../Enums/ComponentType.ts"/>

class PhysicsComponent implements IComponent {
    public name: ComponentType;
    public forces: any;
    public netForce: Vector;
}