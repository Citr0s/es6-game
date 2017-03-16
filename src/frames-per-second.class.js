class FramesPerSecond {
    constructor() {
        this.frameCount = 0;
        this.deltaCount = 0;
        this.framesCurrentSecond = 0;
    }

    update(delta) {
        this.frameCount++;
        this.deltaCount += delta;

        if (this.deltaCount >= 1) {
            this.framesCurrentSecond = this.frameCount;

            this.deltaCount = 0;
            this.frameCount = 0;
        }
    }

    getFrameCount() {
        return this.framesCurrentSecond;
    }
}

export default FramesPerSecond;