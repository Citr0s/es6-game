import Window from './window.class';

class Appearance {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    draw(x, y) {
        Window.drawRect(x, y, this.width, this.height);
    }
}

export default Appearance;