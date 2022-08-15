import "./../style.css";

const status = document.querySelector("#status");
const mapLink = document.querySelector("#map-link");

const getLocationSuccess = async (position) => {
	const {latitude, longitude} = position.coords;

	status.textContent = "";
	mapLink.href = `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;
	mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
};

const getLocationError = () => {
	status.textContent = "Unable to retrieve your location";
};

const getLocationButton = document.querySelector("#get-location-button");

getLocationButton.addEventListener("click", () => {
	navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError, {enableHighAccuracy: true});
	navigator.geolocation.watchPosition(getLocationSuccess, getLocationError, {enableHighAccuracy: true});
});
