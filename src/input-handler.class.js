let pressedCharacter = "";

class InputHandler {
    static setCharacter(e) {
        pressedCharacter = e.key;
    }

    static resetCharacter() {
        pressedCharacter = "";
    }

    static checkKey(character) {
        return pressedCharacter.toLowerCase() === character.toLowerCase();
    }

    static inititialise() {
        document.addEventListener('keydown', InputHandler.setCharacter);
        document.addEventListener('keyup', InputHandler.resetCharacter);
    }
}

export default InputHandler;