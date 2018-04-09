///<reference path="./IComponent.ts"/>
///<reference path="../Common/Vector.ts"/>
///<reference path="../Common/ComponentType.ts"/>

class SpriteComponent implements IComponent {
    public name: ComponentType;
    picture: Picture;
    height: number;
    width: number;
    direction: number;
    animationCycle: number;
    frameCount: number;
    currentAnimationTick: number;
    currentFrame: number;
}