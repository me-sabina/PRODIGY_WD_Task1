let startTime = 0;
let elapsedTime = 0;
let intervalId = null;
let isRunning = false;

// Get DOM elements
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsContainer = document.getElementById('laps');

// Attach event listeners to buttons
startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', recordLap);

function start() {
    if (!isRunning) {
        // Capture the start time by subtracting elapsed time (if any)
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 100);  // Update every 100ms
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(intervalId); // Stop the interval
        elapsedTime = Date.now() - startTime; // Calculate elapsed time so far
        isRunning = false;
    }
}

function reset() {
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.innerText = '00:00:00'; // Reset display
    lapsContainer.innerHTML = '';   // Clear laps
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    display.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function recordLap() {
    if (isRunning) {
        const lapTime = display.innerText;
        const lapElement = document.createElement('div');
        lapElement.innerText = `Lap: ${lapTime}`;
        lapsContainer.appendChild(lapElement);
    }
}
