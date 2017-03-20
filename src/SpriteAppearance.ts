/// <reference path="./Interfaces/IAppearance"/>
/// <reference path="./Sprite"/>

class SpriteAppearance implements IAppearance {
    width: number;
    height: number;

    private _sprite: Sprite;

    constructor(sprite: Sprite, height: number, width: number) {
        this._sprite = sprite;
        this.height = height;
        this.width = width;
    }

    update(delta: number): void {
        this._sprite.update(delta);
    }

    draw(x: number, y: number): void {
        Renderer.strokeRect(x, y, this.width, this.height);
        Renderer.drawSprite(x, y, this.width, this.height, 65, 65, this._sprite.picture, this._sprite.direction, this._sprite.currentFrame);
    }
}