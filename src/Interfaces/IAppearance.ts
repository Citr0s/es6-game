interface IAppearance {
    width: number;
    height: number;

    update(delta: number): void;
    draw(x: number, y: number): void;
}