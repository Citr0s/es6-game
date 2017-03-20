///<reference path="../InputHandler.ts"/>
let debugEnabled: boolean;

class Debugger {
    constructor() {
        debugEnabled = false;
    }

    update() {
        if (InputHandler.checkKey(InputMappings.TOGGLE_DEBUG())) {
            debugEnabled = !debugEnabled;
        }
    }

    static isDebugEnabled() {
        return debugEnabled;
    }
}