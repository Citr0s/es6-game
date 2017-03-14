class Player {
    constructor(transformation, appearance) {
        this.transformation = transformation;
        this.appearance = appearance;
    }

    update(delta) {
        if (InputHandler.checkKey("D")) {
            this.transformation.physics.updateForce(new Force("KINETIC_HORIZONTAL", 0.5, 0));
        } else {
            this.transformation.physics.updateForce(new Force("KINETIC_HORIZONTAL", 0, 0));
        }

        this.transformation.update(delta);
    }

    draw() {
        this.appearance.draw(this.transformation.x, this.transformation.y);

        if (this.transformation.y + this.appearance.height > canvas.height) {
            this.transformation.y = canvas.height - this.appearance.height;
            this.transformation.yVelocity = 0;
        }
    }
}

class Transformation {
    constructor(x, y, physics) {
        this.x = x;
        this.y = y;
        this.physics = physics;

        this.xVelocity = 0;
        this.yVelocity = 0;
        this.mass = 10;
    }

    update(delta) {
        var force = this.physics.calculateTotalForce();
        var acceleration = force / this.mass;

        this.xVelocity += acceleration.x * delta;
        this.yVelocity += acceleration.y * delta;

        this.x += this.xVelocity * delta + 0.5 * (-1) * acceleration.x * delta * delta;
        this.y += this.yVelocity * delta + 0.5 * (-1) * acceleration.y * delta * delta;
    }
}

class Appearance {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    draw(x, y) {
        context.fillRect(x, y, this.width, this.height);
    }
}

class InputHandler {
    constructor() {
        document.addEventListener('keydown', InputHandler.setCharacter);
        document.addEventListener('keyup', InputHandler.resetCharacter);
    }

    static setCharacter(e) {
        pressedCharacter = e.key;
    }

    static resetCharacter() {
        pressedCharacter = "";
    }

    static checkKey(character) {
        return pressedCharacter.toLowerCase() === character.toLowerCase();
    }
}

class Physics {
    constructor() {
        this.forces = {
            "KINETIC_HORIZONTAL": new Force(0, 0),
            "KINETIC_VERTICAL": new Force(0, 0),
            "GRAVITY": new Force(0, 10)
        };
    }

    updateForce(force) {
        for (let i = 0; i < this.forces.count; i++) {
            if (this.forces[i].key === force.key) {
                this.forces[i] = force;
            }
        }
    }

    calculateTotalForce() {
        let totalForce = { x: 0, y: 0 };

        for (let key in this.forces) {
            totalForce.x += this.forces[key].x;
            totalForce.y += this.forces[key].y;
        }

        return totalForce;
    }
}

class Force {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let pressedCharacter = "";
let player = new Player(new Transformation(10, 10, new Physics()), new Appearance(50, 50));
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

