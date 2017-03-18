class Picture{
    public image: HTMLImageElement;

    constructor(path: string){
        this.image = new Image();
        this.image.src = path;
    }

    public toImage(){
        return this.image;
    }
}