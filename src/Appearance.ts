/// <reference path="./Renderer"/>
/// <reference path="./Helpers/Picture"/>

class Appearance {
    public height: number;
    public width: number;

    constructor(height:number, width:number) {
        this.height = height;
        this.width = width;
    }

    draw(x:number, y:number) {
        Renderer.drawRect(x, y, this.width, this.height);
    }

    drawSprite(x:number, y:number, spriteWidth:number, spriteHeight:number, spritePath:string, direction:number) {
        Renderer.drawSprite(x, y, this.width, this.height, spriteWidth, spriteHeight, new Picture(spritePath), direction);
    }
}