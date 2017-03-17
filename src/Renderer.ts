class Renderer {
    private static canvas: HTMLCanvasElement;
    private static context: CanvasRenderingContext2D;

    static inititialise() {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
    }

    static draw(x:number, y:number) {
        //TODO -- Pass in image/object to draw
    }

    static drawRect(x:number, y:number, width:number, height:number) {
        this.context.fillRect(x, y, width, height);
    }

    static drawText(x:number, y:number, text:string) {
        this.context.fillText(text, x, y);
    }

    static refreshScreenBuffer() {
        this.context.clearRect(0, 0,  this.canvas.width,  this.canvas.height);
    }
}