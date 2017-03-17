import InputHandler from './input-handler.class';
import Timer from './timer.class';
import Window from './window.class';
import FramesPerSecond from './frames-per-second.class';
import ObjectManager from  './object-manager.class';

InputHandler.inititialise();
Window.inititialise();

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
    Window.refreshScreenBuffer();
    Window.drawText(10, 15, 'FPS: ' + framesPerSecond.getFrameCount());

    objectManager.draw();
}

