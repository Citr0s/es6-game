class Renderer {
    private static canvas: HTMLCanvasElement;
    private static context: CanvasRenderingContext2D;
    private static tick: number;

    static inititialise() {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.tick = 0;
    }

    static draw(x:number, y:number) {
        //TODO -- Pass in image/object to draw
    }

    static drawRect(x:number, y:number, width:number, height:number) {
        this.context.fillRect(x, y, width, height);
    }

    static drawSprite(x:number, y:number, width:number, height:number, spriteWidth:number, spriteHeight:number, sprite:Picture, movementDirection:number) {

        this.context.drawImage(sprite.toImage(), spriteWidth * this.tick, spriteHeight * movementDirection, spriteWidth, spriteHeight, x, y, width, height);

        this.updateTick();
    }

    static drawText(x:number, y:number, text:string) {
        this.context.fillText(text, x, y);
    }

    static refreshScreenBuffer() {
        this.context.clearRect(0, 0,  this.canvas.width,  this.canvas.height);
    }

    private static updateTick() {
        this.tick++;

        if(this.tick > 8)
            this.tick = 0;
    }
}