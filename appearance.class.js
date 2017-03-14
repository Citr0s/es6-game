import Canvas from './canvas.class';

let canvas = new Canvas();

class Appearance {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    draw(x, y) {
        canvas.context.fillRect(x, y, this.width, this.height);
    }
}

export default Appearance;