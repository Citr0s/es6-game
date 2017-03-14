class Canvas{
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
    }
}

export default Canvas;