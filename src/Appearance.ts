/// <reference path="./Renderer"/>
/// <reference path="./Helpers/Picture"/>
/// <reference path="./Interfaces/IAppearance"/>

class Appearance implements IAppearance {
    public height: number;
    public width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    update(delta: number) {

    }

    draw(x: number, y: number) {
        Renderer.drawRect(x, y, this.width, this.height);
    }

    drawBorder(x: number, y: number) {
        Renderer.strokeRect(x, y, this.width, this.height);
    }
}