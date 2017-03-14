import Player from './player.class';
import Transformation from './transformation.class';
import Appearance from './appearance.class';
import Physics from './physics.class';

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let player = new Player(new Transformation(10, 10, new Physics()), new Appearance(50, 50, context));
let time = new Date();

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
    context.clearRect(0, 0, 800, 600);
    player.draw();
}

