import "./../style.css";
import "./cube.css";

const alphaSpan = document.querySelector("#alpha-span");
const betaSpan = document.querySelector("#beta-span");
const gammaSpan = document.querySelector("#gamma-span");

const cube = document.querySelector(".cube");

window.addEventListener("deviceorientation", (event) => {
	alphaSpan.textContent = `${event.alpha.toFixed(2)}°`;
	betaSpan.textContent = `${event.beta.toFixed(2)}°`;
	gammaSpan.textContent = `${event.gamma.toFixed(2)}°`;

	cube.style.transform = `rotateX(${event.beta}deg) rotateY(${event.gamma}deg) rotateZ(${event.alpha}deg)`;
});
