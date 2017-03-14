import Player from './player.class';
import Transformation from './transformation.class';
import Appearance from './appearance.class';
import Physics from './physics.class';
import Canvas from './canvas.class';

let time = new Date();
let canvas = new Canvas();
let player = new Player(new Transformation(10, 10, new Physics()), new Appearance(50, 50));

function mainLoop() {
    console.log("looped");

    update();
    draw();

    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);

function update() {
    let delta = new Date() - time;

    player.update(delta / 1000);

    time = new Date();
}

function draw() {
    canvas.context.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    player.draw();
}

