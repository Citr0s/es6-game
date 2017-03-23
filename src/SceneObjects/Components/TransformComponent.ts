///<reference path="../../Interfaces/IComponent.ts"/>

class TransformComponent implements IComponent {
    public name: ComponentType;
    public physics: Physics;
    public position: Vector;
    public initialVelocity: Vector;
    public velocity: Vector;
    public mass: number;
}