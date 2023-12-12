var timerCountdown = document.getElementById('timer');
var timerStartButton = document.getElementById('button-start');
var buttonFokus = document.getElementById('button fokus');
var buttonShortBreak = document.getElementById('button short-break');
var buttonLongBreak = document.getElementById('button long-break');

var timerMessage = document.getElementById('timer-message');
var closeButtonTimesEnd = document.getElementById('close-button-timesup');

var sound = document.getElementById('timer-end-tone');

var secondsInterval = 1500;
var intervalId = null;
buttonFokus.style.backgroundColor = '#2196F3';
buttonFokus.style.color = '#ffffff';

timerStartButton.addEventListener('click', startPauseTimer);


function setButtonTimer(time) {
    secondsInterval = time;
    showTimerCountdown();
}

function playSound() {

    sound.play();
    sound.addEventListener('ended', function () { sound.pause() });
}

function closeMessageBox() {
    timerMessage.style.display = 'none';
    sound.pause();
}

function setupCloseButton() {
    closeButtonTimesEnd.addEventListener('click', closeMessageBox);
}

function countDown() {
    if (secondsInterval <= 0) {
        closeInterval();
        playSound();
        secondsInterval = 1500;
        showTimerCountdown();
        timerMessage.style.display = 'flex';

        setupCloseButton();

        return;
    }
    console.log(secondsInterval);
    secondsInterval--;
    showTimerCountdown();

}

function resetTimerMessage() {
    timerMessage.style.display = 'none';
}

function startPauseTimer() {
    resetTimerMessage();
    if (intervalId) {
        closeInterval();
        return;
    }
    timerStartButton.textContent = 'Pause';
    intervalId = setInterval(countDown, 1000);



}

function closeInterval() {
    timerStartButton.textContent = 'Start';
    clearInterval(intervalId);
    intervalId = null;
}

function pad(number) {
    return number < 10 ? `0${number}` : number;
}

function showTimerCountdown() {
    var minutes = Math.floor(secondsInterval / 60);
    var seconds = secondsInterval % 60;
    timerCountdown.innerHTML = `${pad(minutes)}:${pad(seconds)}`;
}

function resetButtonStyle(button) {
    button.style.backgroundColor = 'inherit';
    button.style.color = '#ffffff40';

}

function resetAllButtonsStyles() {
    // Resetear estilos de todos los botones
    resetButtonStyle(buttonFokus);
    resetButtonStyle(buttonShortBreak);
    resetButtonStyle(buttonLongBreak);
}

// Añadir estilos a los botones cuando se hace clic
buttonFokus.addEventListener('click', () => {
    setButtonTimer(1500)
    resetAllButtonsStyles();
    buttonFokus.style.backgroundColor = '#2196F3';
    buttonFokus.style.color = '#ffffff';
});

buttonShortBreak.addEventListener('click', () => {
    setButtonTimer(300)
    resetAllButtonsStyles();
    buttonShortBreak.style.backgroundColor = '#2196F3';
    buttonShortBreak.style.color = '#ffffff';
});

buttonLongBreak.addEventListener('click', () => {
    setButtonTimer(900)
    resetAllButtonsStyles();
    buttonLongBreak.style.backgroundColor = '#2196F3';
    buttonLongBreak.style.color = '#ffffff';
});



showTimerCountdown();