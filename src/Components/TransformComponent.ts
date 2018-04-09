///<reference path="./IComponent.ts"/>

class TransformComponent implements IComponent {
    public name: ComponentType;
    public position: Vector;
    public initialVelocity: Vector;
    public velocity: Vector;
    public mass: number;
}