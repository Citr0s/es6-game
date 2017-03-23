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
///<reference path="SceneObjects/Systems/TransformSystem.ts"/>
///<reference path="SceneObjects/Systems/RenderSystem.ts"/>
///<reference path="SceneObjects/Entity.ts"/>
///<reference path="SceneObjects/Components/TransformComponent.ts"/>
///<reference path="SceneObjects/Components/AppearanceComponent.ts"/>

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

class ObjectManager {
    private objects: Object[] = Array();
    private entities: Entity[] = Array();
    private systems: ISystem[] = Array();

    constructor() {
        let spriteData: SpriteData = {
            picture: new Picture("./assets/sampleAsset.png"),
            height: 65,
            width: 65,
            direction: 0,
            animationCycle: 1,
            frameCount: 8
        };

        this.objects.push(new Player(new Transformation(new Physics(), new Vector(100, 100), 1), new SpriteAppearance(new Sprite(spriteData), 50, 50)));
        this.objects.push(new SceneObject(new Transformation(new Physics(), new Vector(canvas.width / 2, canvas.height - 150), 100), new Appearance(150, 150)));

        this.systems.push(new TransformSystem());
        this.systems.push(new RenderSystem());

        let entity = new Entity();
        let transformData: TransformComponent = {
            name: ComponentType.TRANSFORM,
            physics: new Physics(),
            position: new Vector(canvas.width / 2 - 50, canvas.height - 450),
            initialVelocity: new Vector(0, 0),
            velocity: new Vector(0, 0),
            mass: 10
        };

        entity.addComponent(transformData);

        let appearanceData: AppearanceComponent = {
            name: ComponentType.APPEARANCE,
            height: 150,
            width: 150
        };

        entity.addComponent(appearanceData);

        this.entities.push(entity);
    }

    update(delta: number) {
        for (let key in this.systems) {
            this.systems[key].update(this.entities, delta);
        }

        for (let key in this.objects) {
            for (let i = 0; i < this.objects.length; i++) {
                if (i === parseInt(key))
                    continue;

                CollisionHelper.collide(this.objects[key], this.objects[i]);
            }

            CollisionHelper.collideWithCanvasBoundaries(this.objects[key], canvas);
            this.objects[key].update(delta);
        }
    }

    draw() {
        for (let key in this.systems) {
            this.systems[key].draw(this.entities);
        }

        for (let key in this.objects) {
            this.objects[key].draw();
        }
    }
}