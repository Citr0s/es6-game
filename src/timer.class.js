let time = new Date().getTime();

class Timer {
    static constructor() {}

    static getDeltaTime() {
        var currentTime = new Date().getTime();
        var delta = (currentTime - time) / 1000;
        time = currentTime;

        return delta;
    }
}

export default Timer;