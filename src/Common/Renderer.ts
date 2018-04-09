class Renderer {
    private static canvas: HTMLCanvasElement;
    private static context: CanvasRenderingContext2D;

    static inititialise() {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
    }

    static drawRect(x: number, y: number, width: number, height: number) {
        if (Debugger.isDebugEnabled()) {
            this.drawDebugInfo(x, y, width, height)
        }
        this.context.fillRect(x, y, width, height);
    }

    static strokeRect(x: number, y: number, width: number, height: number) {
        this.context.strokeRect(x, y, width, height);
    }

    static strokeRectWithColor(x: number, y: number, width: number, height: number, color: string) {
        this.context.strokeStyle = color;
        this.context.strokeRect(x, y, width, height);
    }

    static drawSprite(x: number, y: number, width: number, height: number, spriteWidth: number, spriteHeight: number, sprite: Picture, movementDirection: number, spriteFrame: number) {
        if (Debugger.isDebugEnabled()) {
            this.drawDebugInfo(x, y, width, height)
        }
        this.context.drawImage(sprite.toImage(), spriteWidth * spriteFrame, spriteHeight * movementDirection, spriteWidth, spriteHeight, x, y, width, height);
    }

    static drawText(x: number, y: number, text: string) {
        this.context.fillText(text, x, y);
    }

    static drawDebugInfo(x: number, y: number, width: number, height: number) {
        this.strokeRectWithColor(x, y, width, height, "#FF0000");
        this.drawText(x, y - 20, "X: " + Math.round(x * 100) / 100);
        this.drawText(x, y - 10, "Y: " + Math.round(y * 100) / 100);
    }

    static refreshScreenBuffer() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}