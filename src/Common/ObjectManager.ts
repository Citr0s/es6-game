///<reference path="Entity.ts"/>
///<reference path="../Systems/ISystem.ts"/>

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

class ObjectManager {
    private entities: Entity[] = Array();
    private systems: ISystem[] = Array();

    update(delta: number) {
        for (let key in this.systems) {
            this.systems[key].update(this.entities, delta);
        }
    }

    draw() {
        for (let key in this.systems) {
            this.systems[key].draw(this.entities);
        }
    }

    addSystem(system: ISystem) {
        this.systems.push(system);
    }

    addEntity(entity: Entity) {
        this.entities.push(entity);
    }
}