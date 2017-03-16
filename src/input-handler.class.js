let pressedCharacter = [];

class InputHandler {
    static inititialise() {
        document.addEventListener('keydown', InputHandler.setCharacter);
        document.addEventListener('keyup', InputHandler.resetCharacter);
    }

    static setCharacter(e) {
        pressedCharacter.push(e.key.toLowerCase());
    }

    static resetCharacter(e) {
        pressedCharacter.pop(e.key.toLowerCase());
    }

    static checkKey(character) {
        return pressedCharacter.includes(character.toLowerCase());
    }
}

export default InputHandler;