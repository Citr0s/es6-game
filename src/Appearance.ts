/// <reference path="./Renderer"/>

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
}