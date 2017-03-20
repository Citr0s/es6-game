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

    constructor(picture: Picture, height: number, width: number) {
        this.picture = picture;
        this.height = height;
        this.width = width;
        this.direction = 0;
        this.animationCycle = 1;
        this.currentAnimationTick = 0;
        this.currentFrame = 0;
        this.frameCount = 8;
    }

    update(delta: number) {
        this.currentAnimationTick += delta;

        if (this.currentAnimationTick >= this.animationCycle / this.frameCount) {
            this.currentAnimationTick = 0;
            this.currentFrame++;
        }

        if (this.currentFrame >= 8) {
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