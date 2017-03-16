import Player from './src/player.class';
import Transformation from './src/transformation.class';
import Appearance from './src/appearance.class';
import Physics from './src/physics.class';
import InputHandler from './src/input-handler.class';
import Vector from './src/vector.class';
import Timer from './src/timer.class';
import Window from './src/window.class';
import FramesPerSecond from './src/frames-per-second.class';

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

