/// <reference path="./Common/InputHandler"/>
/// <reference path="./Common/Timer"/>
/// <reference path="./Common/Renderer"/>
/// <reference path="./Common/FramesPerSecond"/>
/// <reference path="./Common/ObjectManager"/>
///<reference path="Common/Helpers/Debugger.ts"/>

InputHandler.inititialise();
Renderer.inititialise();

let debugging = new Debugger();
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
    debugging.update(delta);
    framesPerSecond.update(delta);
    objectManager.update(delta);
}

function draw() {
    Renderer.refreshScreenBuffer();
    Renderer.drawText(10, 15, 'FPS: ' + framesPerSecond.getFrameCount());

    objectManager.draw();
}

