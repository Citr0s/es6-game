///<reference path="./IComponent.ts"/>
///<reference path="../../Vector.ts"/>
///<reference path="../../Enums/ComponentType.ts"/>

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