let pressedCharacter = "";

class InputHandler {
    constructor() {
        document.addEventListener('keydown', InputHandler.setCharacter);
        document.addEventListener('keyup', InputHandler.resetCharacter);
    }

    static setCharacter(e) {
        pressedCharacter = e.key;
    }

    static resetCharacter() {
        pressedCharacter = "";
    }

    static checkKey(character) {
        return pressedCharacter.toLowerCase() === character.toLowerCase();
    }
}

export default InputHandler;