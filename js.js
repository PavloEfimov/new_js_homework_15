const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");


class Time {
    constructor() {
        this.startTime = 0,
            this.stopTime = 1,
            this.interval = this.stopTime - this.startTime
    }
    start() { return this.startTime }
    stop() { return this.stopTime }
    getTime() { return this.stop() - this.start() }
    static timeToNY() {
        let a = Date.now()
        let b = new Date(2019, 0, 1)
        let c = b - a
        let res = Math.floor(c / (1000 * 60 * 60 * 24))
        console.log(res, 'days to NY');

        return res
    }
}

let one = new Time;

console.log(one);
console.log('start:', one.start(), 'stop:', one.stop(), 'getTime:',
    one.getTime());

let two = new Time;
two.startTime = 3;
two.stopTime = 10;

console.log(two);
console.log('start:', two.start(), 'stop:', two.stop(), 'getTime:', two.getTime());

let stopwatch = new Time;
let a, b

stopwatch.start = function() {
    a = Date.now()
    // console.log('stopwatch.start:', a)
    return a
}

stopwatch.stop = function() {
    let b = Date.now()
    // console.log('stopwatch.stop:', b)
    // console.log('test_start: ', a)
    stopwatch.interval = b - a
    // console.log(`${stopwatch.interval}ms`)
    stopwatch.getTime = function() { return this.interval }
    console.log(`${stopwatch.getTime()}ms`)
    return b
}

Time.timeToNY();



startButton.addEventListener("click", stopwatch.start);
stopButton.addEventListener("click", stopwatch.stop);