import Player from './src/player.class';
import Transformation from './src/transformation.class';
import Appearance from './src/appearance.class';
import Physics from './src/physics.class';
import InputHandler from './src/input-handler.class';
import Vector from './src/vector.class';
import Timer from './src/timer.class';
import Window from './src/window.class';

InputHandler.inititialise();
Window.inititialise();

let player = new Player(new Transformation(new Physics(), new Vector(10, 10), 10), new Appearance(50, 50));

function mainLoop() {
    console.log("looped");

    update();
    draw();

    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);

function update() {
    player.update(Timer.getDeltaTime());
}

function draw() {
    Window.refreshScreenBuffer();
    player.draw();
}

