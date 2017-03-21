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
    private player: Player;
    private box: SceneObject;

    constructor() {
        let spriteData: SpriteData = {
            picture: new Picture("./assets/sampleAsset.png"),
            height: 65,
            width: 65,
            direction: 0,
            animationCycle: 1,
            currentAnimationTick: 0,
            currentFrame: 0,
            frameCount: 8
        };

        this.player = new Player(new Transformation(new Physics(), new Vector(100, 100), 1), new SpriteAppearance(new Sprite(spriteData), 50, 50));
        this.box = new SceneObject(new Transformation(new Physics(), new Vector(canvas.width / 2, canvas.height - 150), 1), new Appearance(150, 150));
    }

    update(delta: number) {
        this.player.update(delta);
        this.box.update(delta);
        CollisionHelper.collideWithCanvasBoundaries(this.player, canvas);
        CollisionHelper.collideWithCanvasBoundaries(this.box, canvas);
        CollisionHelper.collide(this.player, this.box);
    }

    draw() {
        this.player.draw();
        this.box.draw();
    }
}