let pressedCharacter = [];

class InputHandler {
    static inititialise() {
        document.addEventListener('keydown', InputHandler.setCharacter);
        document.addEventListener('keyup', InputHandler.resetCharacter);
    }

    static setCharacter(e) {
        if(pressedCharacter.indexOf(e.key.toLowerCase()) > -1)
            return;

        pressedCharacter.push(e.key.toLowerCase());
    }

    static resetCharacter(e) {
        if(pressedCharacter.indexOf(e.key.toLowerCase()) === -1)
            return;

        pressedCharacter.splice(pressedCharacter.indexOf(e.key.toLowerCase()), 1);
    }

    static checkKey(character) {
        return pressedCharacter.includes(character.toLowerCase());
    }
}

export default InputHandler;