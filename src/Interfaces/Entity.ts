interface Entity {
    transformation: Transformation;
    appearance: IAppearance;

    update(delta: number): void;
    draw(): void;
}