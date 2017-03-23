///<reference path="../Interfaces/IComponent.ts"/>
///<reference path="../Enums/ComponentType.ts"/>

class Entity {
    public components: IComponent[] = Array();

    public addComponent(component: IComponent) {
        this.components.push(component);
    }

    public removeComponent(componentName: ComponentType) {
        for (let key in this.components) {
            if (this.components[key].name === componentName) {
                this.components.splice(parseInt(key), 1);
                break;
            }
        }
    }

    public getComponent(componentName: ComponentType): IComponent {
        for (let key in this.components) {
            if (this.components[key].name === componentName) {
                return this.components[key];
            }
        }
    }

    public hasComponent(componentName: ComponentType) {
        for (let key in this.components) {
            if (this.components[key].name === componentName) {
                return true;
            }
        }
    }
}