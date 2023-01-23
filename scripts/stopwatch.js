let running = false;

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

resetButton.disabled = true;
stopButton.disabled = true;

let time = 0;

function refreshDisplay() {
    minutes.innerText = getCurrentMinutesValue();
    seconds.innerText = getCurrentSecondsValue();
}

function start(seconds = 0) {
    running = true;

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;

    const interval = setInterval(() => {
        if (!running) {
            clearInterval(interval);
            return;
        }
        time += 1;
        refreshDisplay();
    }, 1000);
}

function reset() {
    time = 0;
    refreshDisplay();

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

function stop() {
    running = false;
    refreshDisplay();

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function getCurrentMinutesValue() {
    const newMinutesValue = Math.floor(time / 60);
    return newMinutesValue < 10 ? `0${newMinutesValue}` : newMinutesValue;
}

function getCurrentSecondsValue() {
    const newSecondsValue = Math.floor(time % 60);
    return newSecondsValue < 10 ? `0${newSecondsValue}` : newSecondsValue;
}
