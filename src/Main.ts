/// <reference path="./InputHandler"/>
/// <reference path="./Timer"/>
/// <reference path="./Renderer"/>
/// <reference path="./FramesPerSecond"/>
/// <reference path="./ObjectManager"/>

InputHandler.inititialise();
Renderer.inititialise();

let framesPerSecond = new FramesPerSecond();

let objectManager = new ObjectManager();

function mainLoop() {
    update();
    draw();

    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);

function update() {
    let delta = Timer.getDeltaTime();

    framesPerSecond.update(delta);
    objectManager.update(delta);
}

function draw() {
    Renderer.refreshScreenBuffer();
    Renderer.drawText(10, 15, 'FPS: ' + framesPerSecond.getFrameCount());

    objectManager.draw();
}

