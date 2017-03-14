class Appearance {
    constructor(height, width, context) {
        this.height = height;
        this.width = width;
        this.context = context;
    }

    draw(x, y) {
        this.context.fillRect(x, y, this.width, this.height);
    }
}

export default Appearance;