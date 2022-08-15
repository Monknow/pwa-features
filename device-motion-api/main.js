import "./../style.css";

const accelerationSpanX = document.querySelector("#acceleration-span-x");
const accelerationSpanY = document.querySelector("#acceleration-span-y");
const accelerationSpanZ = document.querySelector("#acceleration-span-z");

const rotationRateSpanAlpha = document.querySelector("#rotation-rate-span-alpha");
const rotationRateSpanBeta = document.querySelector("#rotation-rate-span-beta");
const rotationRateSpanGamma = document.querySelector("#rotation-rate-span-gamma");

window.addEventListener("devicemotion", (event) => {
	accelerationSpanX.textContent = `${event.acceleration.x.toFixed(2)} m/s^2`;
	accelerationSpanY.textContent = `${event.acceleration.y.toFixed(2)} m/s^2`;
	accelerationSpanZ.textContent = `${event.acceleration.z.toFixed(2)} m/s^2`;

	rotationRateSpanAlpha.textContent = `${event.rotationRate.alpha.toFixed(2)} m/s^2`;
	rotationRateSpanBeta.textContent = `${event.rotationRate.beta.toFixed(2)} m/s^2`;
	rotationRateSpanGamma.textContent = `${event.rotationRate.gamma.toFixed(2)} m/s^2`;
});
