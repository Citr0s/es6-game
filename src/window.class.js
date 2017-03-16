class Window {
    static inititialise() {
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
    }

    static draw(x, y) {
        //TODO -- Pass in image/object to draw
    }

    static drawRect(x, y, width, height) {
        this.context.fillRect(x, y, width, height);
    }

    static refreshScreenBuffer() {
        this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

export default Window;