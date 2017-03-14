let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

class Appearance {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    draw(x, y) {
        context.fillRect(x, y, this.width, this.height);
    }
}

export default Appearance;