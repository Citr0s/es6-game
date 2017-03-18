interface Entity {
    transformation: Transformation;
    appearance: Appearance;

    update(delta:number):void;
    draw():void;
}