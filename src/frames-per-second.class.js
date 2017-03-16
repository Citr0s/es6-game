class FramesPerSecond {
    constructor() {
        this.frameCount = 0;
        this.deltaCount = 0;
        this.framesPerSecond = 0;
    }

    update(delta) {
        this.frameCount++;
        this.deltaCount += delta;

        if (this.deltaCount >= 1) {
            this.framesPerSecond = this.frameCount;

            this.deltaCount = 0;
            this.frameCount = 0;
        }
    }

    getFramesPerSecond() {
        return this.framesPerSecond;
    }
}

export default FramesPerSecond;