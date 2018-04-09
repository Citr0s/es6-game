///<reference path="./IComponent.ts"/>
///<reference path="../Common/Vector.ts"/>
///<reference path="../Common/ComponentType.ts"/>

class CollisionComponent implements IComponent {
    public name: ComponentType;
    public isColliding: boolean;

    constructor() {
        this.isColliding = false;
    }
}