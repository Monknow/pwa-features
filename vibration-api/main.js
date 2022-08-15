import "./../style.css";

const vibrateButton = document.querySelector("#vibrate-button");
const stopVibrateButton = document.querySelector("#stop-vibrate-button");
const milisecondsInput = document.querySelector("#miliseconds-input");

vibrateButton.addEventListener("click", () => {
	navigator.vibrate(milisecondsInput.value * 1000);
});

stopVibrateButton.addEventListener("click", () => {
	navigator.vibrate(0);
});
