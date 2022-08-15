import "./../style.css";
import {parseTime} from "./parseTime";

const batteryLevelSpan = document.querySelector("#battery-level-span");
const batteryStateSpan = document.querySelector("#battery-state-span");
const batteryTimeSpan = document.querySelector("#battery-time-span");

const updateBatteryLevel = ({level}) => {
	batteryLevelSpan.textContent = `${level * 100}%`;
};

const updateCharging = ({charging}) => {
	batteryStateSpan.textContent = charging ? "Charging" : "Discharging";
};

const updateChargingTime = ({charging, chargingTime, dischargingTime}) => {
	const chargingText =
		chargingTime !== Infinity
			? `Time to fully charge: ${parseTime(chargingTime)}`
			: " Time to fully charge is unknown";
	const dischargingText =
		dischargingTime !== Infinity
			? `Battery time left: ${parseTime(dischargingTime)}`
			: "Battery time left is unknown";

	batteryTimeSpan.textContent = charging ? chargingText : dischargingText;
};

const setUpBatteryManager = async () => {
	const battery = await navigator.getBattery();

	updateBatteryLevel(battery);
	updateCharging(battery);
	updateChargingTime(battery);

	battery.addEventListener("chargingchange", () => updateCharging(battery));
	battery.addEventListener("chargingtimechange", () => updateChargingTime(battery));
	battery.addEventListener("dischargingtimechange", () => updateChargingTime(battery));
	battery.addEventListener("levelchange", () => updateBatteryLevel(battery));
};

setUpBatteryManager();
