/// <reference path="./Helpers/Picture"/>
/// <reference path="./Vector"/>
///<reference path="SceneObjects/Systems/TransformSystem.ts"/>
///<reference path="SceneObjects/Systems/RenderSystem.ts"/>
///<reference path="SceneObjects/Entity.ts"/>
///<reference path="SceneObjects/Components/TransformComponent.ts"/>
///<reference path="SceneObjects/Components/AppearanceComponent.ts"/>
///<reference path="SceneObjects/Components/CollisionComponent.ts"/>
///<reference path="SceneObjects/Components/MovementComponent.ts"/>
///<reference path="SceneObjects/Components/SpriteComponent.ts"/>
///<reference path="SceneObjects/Systems/PhysicsSystem.ts"/>
///<reference path="SceneObjects/Systems/CollisionSystem.ts"/>
///<reference path="SceneObjects/Systems/MovementSystem.ts"/>
///<reference path="SceneObjects/Systems/SpriteSystem.ts"/>

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

class ObjectManager {
    private entities: Entity[] = Array();
    private systems: ISystem[] = Array();

    constructor() {
        this.systems.push(new PhysicsSystem());
        this.systems.push(new TransformSystem());
        this.systems.push(new RenderSystem());
        this.systems.push(new CollisionSystem());
        this.systems.push(new MovementSystem());
        this.systems.push(new SpriteSystem());

        this.entities.push(this.generateNewEntity(new Vector(canvas.width / 2 - 50, canvas.height - 450), 150, 150, 10, false, false));
        this.entities.push(this.generateNewEntity(new Vector(canvas.width / 2, canvas.height - 150), 150, 150, 10, false, false));
        this.entities.push(this.generateNewEntity(new Vector(100, 100), 50, 50, 1, true, true));
    }

    update(delta: number) {
        for (let key in this.systems) {
            this.systems[key].update(this.entities, delta);
        }
    }

    draw() {
        for (let key in this.systems) {
            this.systems[key].draw(this.entities);
        }
    }

    generateNewEntity(position: Vector, height: number, width: number, mass: number, isControllable: boolean, hasSprite: boolean) {
        let entity = new Entity();
        let transformData: TransformComponent = {
            name: ComponentType.TRANSFORM,
            position: position,
            initialVelocity: new Vector(0, 0),
            velocity: new Vector(0, 0),
            mass: mass
        };

        entity.addComponent(transformData);

        let appearanceData: AppearanceComponent = {
            name: ComponentType.APPEARANCE,
            height: height,
            width: width
        };

        entity.addComponent(appearanceData);

        let collisionData: CollisionComponent = {
            name: ComponentType.COLLISION,
            isColliding: false
        };

        entity.addComponent(collisionData);

        let physicsData: PhysicsComponent = {
            name: ComponentType.PHYSICS,
            forces: {
                KINETIC_HORIZONTAL: new Vector(0, 0),
                KINETIC_VERTICAL: new Vector(0, 0),
                GRAVITY: new Vector(0, 1000 * transformData.mass)
            },
            netForce: new Vector(0, 0)
        };

        entity.addComponent(physicsData);

        if (isControllable) {
            let movementData: MovementComponent = {
                name: ComponentType.MOVEMENT
            };

            entity.addComponent(movementData);
        }

        if (hasSprite) {
            let spriteData: SpriteComponent = {
                name: ComponentType.SPRITE,
                picture: new Picture("./assets/sampleAsset.png"),
                height: 65,
                width: 65,
                direction: 0,
                animationCycle: 1,
                frameCount: 8,
                currentAnimationTick: 0,
                currentFrame: 0
            };

            entity.addComponent(spriteData);
        }

        return entity;
    }
}