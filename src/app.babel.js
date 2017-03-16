import Player from './player.class';
import Transformation from './transformation.class';
import Appearance from './appearance.class';
import Physics from './physics.class';
import InputHandler from './input-handler.class';
import Vector from './vector.class';
import Timer from './timer.class';
import Window from './window.class';
import FramesPerSecond from './frames-per-second.class';

InputHandler.inititialise();
Window.inititialise();

let framesPerSecond = new FramesPerSecond();

let player = new Player(new Transformation(new Physics(), new Vector(100, 100), 1), new Appearance(50, 50));

function mainLoop() {
    update();
    draw();

    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);

function update() {
    let delta = Timer.getDeltaTime();

    framesPerSecond.update(delta);
    player.update(delta);
}

function draw() {
    Window.refreshScreenBuffer();
    Window.drawText(10, 15, 'FPS: ' + framesPerSecond.getFramesPerSecond());

    player.draw();
}

