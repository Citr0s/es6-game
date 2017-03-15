import Player from './src/player.class';
import Transformation from './src/transformation.class';
import Appearance from './src/appearance.class';
import Physics from './src/physics.class';
import InputHandler from './src/input-handler.class';
import Vector from './src/vector.class';
import Timer from './src/timer.class'

InputHandler.inititialise();

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let time = new Date();
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
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
}

