///<reference path="./IComponent.ts"/>
///<reference path="../../Vector.ts"/>
///<reference path="../../Enums/ComponentType.ts"/>

class CollisionComponent implements IComponent {
    public name: ComponentType;
    public isColliding: boolean;

    constructor() {
        this.isColliding = false;
    }
}