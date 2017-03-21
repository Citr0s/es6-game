/// <reference path="./Player"/>
/// <reference path="./Transformation"/>
/// <reference path="./Appearance"/>
/// <reference path="./SpriteAppearance"/>
/// <reference path="./Helpers/Picture"/>
/// <reference path="./Sprite"/>
/// <reference path="./Physics"/>
/// <reference path="./Vector"/>
/// <reference path="./CollisionHelper"/>
/// <reference path="./SceneObject"/>
/// <reference path="Object/Models/SpriteData.ts"/>

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

class ObjectManager {
    private entities: Entity[] = Array();

    constructor() {
        let spriteData: SpriteData = {
            picture: new Picture("./assets/sampleAsset.png"),
            height: 65,
            width: 65,
            direction: 0,
            animationCycle: 1,
            frameCount: 8
        };

        this.entities.push(new Player(new Transformation(new Physics(), new Vector(100, 100), 1), new SpriteAppearance(new Sprite(spriteData), 50, 50)));
        this.entities.push(new SceneObject(new Transformation(new Physics(), new Vector(canvas.width / 2, canvas.height - 150), 1), new Appearance(150, 150)));
    }

    update(delta: number) {
        for (let key in this.entities) {
            this.entities[key].update(delta);
            CollisionHelper.collideWithCanvasBoundaries(this.entities[key], canvas);
        }

        CollisionHelper.collide(this.entities[0], this.entities[1]);
    }

    draw() {
        for (let key in this.entities) {
            this.entities[key].draw();
        }
    }
}