import "./../style.css";

let orientationTypeSpan = document.querySelector("#orientation-type");
let orientationAngleSpan = document.querySelector("#orientation-angle");

orientationTypeSpan.textContent = screen.orientation.type;
orientationAngleSpan.textContent = screen.orientation.angle;

window.addEventListener("orientationchange", () => {
	orientationTypeSpan.textContent = screen.orientation.type;
	orientationAngleSpan.textContent = screen.orientation.angle;
});

const fullscreenButton = document.querySelector("#fullscreen-button");

fullscreenButton.addEventListener("click", async () => {
	if (document.fullscreenElement) {
		await document.exitFullscreen();
	} else {
		await document.documentElement.requestFullscreen();
	}
});

const lockButton = document.querySelector("#lock-button");

lockButton.addEventListener("click", async () => {
	try {
		await screen.orientation.lock(screen.orientation.type);
	} catch (err) {
		console.error(err);
	}
});

const unlockButton = document.querySelector("#unlock-button");

unlockButton.addEventListener("click", () => {
	screen.orientation.unlock();
});
