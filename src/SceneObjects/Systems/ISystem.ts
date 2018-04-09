interface ISystem {
    update(entities: Entity[], delta: number): void;
    draw(entities: Entity[]): void;
}