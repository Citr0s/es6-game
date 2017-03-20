/// <reference path="./Helpers/Picture"/>

class Sprite {
    direction: number;
    picture: Picture;
    height: number;
    width: number;
    currentFrame: number;
    private animationCycle: number;
    private currentAnimationTick: number;
    private frameCount: number;

    constructor(spriteData: SpriteData) {
        this.picture = spriteData.picture;
        this.height = spriteData.height;
        this.width = spriteData.width;
        this.direction = spriteData.direction;
        this.animationCycle = spriteData.animationCycle;
        this.currentAnimationTick = spriteData.currentAnimationTick;
        this.currentFrame = spriteData.currentFrame;
        this.frameCount = spriteData.frameCount;
    }

    update(delta: number) {
        this.currentAnimationTick += delta;

        if (this.currentAnimationTick >= this.animationCycle / this.frameCount) {
            this.currentAnimationTick = 0;
            this.currentFrame++;
        }

        if (this.currentFrame >= this.frameCount) {
            this.currentFrame = 0;
        }

        if (InputHandler.checkKey(InputMappings.MOVE_RIGHT())) {
            this.direction = 3;
        }

        if (InputHandler.checkKey(InputMappings.MOVE_LEFT())) {
            this.direction = 1;
        }

        if (InputHandler.checkKey(InputMappings.MOVE_UP())) {
            this.direction = 0;
        }

        if (InputHandler.checkKey(InputMappings.MOVE_DOWN())) {
            this.direction = 2;
        }
    }
}