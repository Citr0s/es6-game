/// <reference path="./Common/InputHandler"/>
/// <reference path="./Common/Timer"/>
/// <reference path="./Common/Renderer"/>
/// <reference path="./Common/FramesPerSecond"/>
/// <reference path="./Common/ObjectManager"/>
///<reference path="Common/Helpers/Debugger.ts"/>
/// <reference path="./Common/Helpers/Picture"/>
/// <reference path="./Common/Vector"/>
///<reference path="./Systems/TransformSystem.ts"/>
///<reference path="./Systems/RenderSystem.ts"/>
///<reference path="./Components/TransformComponent.ts"/>
///<reference path="./Components/AppearanceComponent.ts"/>
///<reference path="./Components/CollisionComponent.ts"/>
///<reference path="./Components/MovementComponent.ts"/>
///<reference path="./Components/SpriteComponent.ts"/>
///<reference path="./Systems/PhysicsSystem.ts"/>
///<reference path="./Systems/CollisionSystem.ts"/>
///<reference path="./Systems/MovementSystem.ts"/>
///<reference path="./Systems/SpriteSystem.ts"/>

InputHandler.inititialise();
Renderer.inititialise();

let debugging = new Debugger();
let framesPerSecond = new FramesPerSecond();
let objectManager = new ObjectManager();

objectManager.addSystem(new PhysicsSystem());
objectManager.addSystem(new TransformSystem());
objectManager.addSystem(new RenderSystem());
objectManager.addSystem(new CollisionSystem());
objectManager.addSystem(new MovementSystem());
objectManager.addSystem(new SpriteSystem());

objectManager.addEntity(generateNewEntity(new Vector(canvas.width / 2 - 50, canvas.height - 450), 150, 150, 10, false, false));
objectManager.addEntity(generateNewEntity(new Vector(canvas.width / 2, canvas.height - 150), 150, 150, 10, false, false));
objectManager.addEntity(generateNewEntity(new Vector(100, 100), 50, 50, 1, true, true));

function mainLoop() {
    update();
    draw();

    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);

function update() {
    let delta = Timer.getDeltaTime();
    debugging.update(delta);
    framesPerSecond.update(delta);
    objectManager.update(delta);
}

function draw() {
    Renderer.refreshScreenBuffer();
    Renderer.drawText(10, 15, 'FPS: ' + framesPerSecond.getFrameCount());

    objectManager.draw();
}

function generateNewEntity(position: Vector, height: number, width: number, mass: number, isControllable: boolean, hasSprite: boolean) {
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
