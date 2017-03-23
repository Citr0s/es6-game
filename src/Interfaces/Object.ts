interface Object {
    transformation: Transformation;
    appearance: IAppearance;
    isColliding: boolean;

    update(delta: number): void;
    draw(): void;
}