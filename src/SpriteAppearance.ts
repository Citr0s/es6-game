/// <reference path="./Interfaces/IAppearance"/>
/// <reference path="./Sprite"/>

class SpriteAppearance implements IAppearance {
    width: number;
    height: number;
    private _direction: number;

    private _sprite: Sprite;

    constructor(sprite: Sprite, height: number, width: number) {
        this._sprite = sprite;
        this.height = height;
        this.width = width;
        this._direction = 0;
    }


    update(delta: number): void {
        if (InputHandler.checkKey(InputMappings.MOVE_RIGHT())) {
            this._direction = 3;
        }

        if (InputHandler.checkKey(InputMappings.MOVE_LEFT())) {
            this._direction = 1;
        }

        if (InputHandler.checkKey(InputMappings.MOVE_UP())) {
            this._direction = 0;
        }

        if (InputHandler.checkKey(InputMappings.MOVE_DOWN())) {
            this._direction = 2;
        }

        this._sprite.update(delta);
    }

    draw(x: number, y: number): void {
        Renderer.strokeRect(x, y, this.width, this.height);
        Renderer.drawSprite(x, y, this.width, this.height, 65, 65, this._sprite.picture, this._direction);
    }
}
