import "./../style.css";

const lookForDevicesButton = document.querySelector("#look-for-devices-button");
const deviceNameSpan = document.querySelector("#device-name-span");
const deviceBatterySpan = document.querySelector("#device-battery-span");
const bluetoothStateSpan = document.querySelector("#bluetooth-state-span");

const setBluetoothState = (state) => {
	bluetoothStateSpan.textContent = state;
};

lookForDevicesButton.addEventListener("click", async (event) => {
	try {
		setBluetoothState("looking for devices");
		const device = await navigator.bluetooth.requestDevice({filters: [{services: ["battery_service"]}]});
		deviceNameSpan.textContent = device.name;

		device.addEventListener("gattserverdisconnected", () => {
			bluetoothStateSpan.textContent = `Device ${device.name} is disconnected.`;
		});

		setBluetoothState("connecting to device...");
		const server = await device.gatt.connect();

		setBluetoothState("accessing device's service...");
		const service = await server.getPrimaryService("battery_service");

		setBluetoothState("accessing device's characteristic...");
		const characteristic = await service.getCharacteristic("battery_level");

		const handleBatteryChange = async () => {
			try {
				const value = await characteristic.readValue();

				deviceBatterySpan.textContent = `Battery percentage is ${value.getUint8(0)}`;
			} catch (error) {
				bluetoothStateSpan.textContent = `failed to connect. Error: ${error}`;
				console.error(error);
			}
		};

		characteristic.addEventListener("characteristicvaluechanged", handleBatteryChange);

		setBluetoothState("reading device's characteristic...");
		const value = await characteristic.readValue();

		setBluetoothState("connected");

		deviceBatterySpan.textContent = `${value.getUint8(0)}%`;
	} catch (error) {
		bluetoothStateSpan.textContent = `failed to connect. Error: ${error}`;
		console.error(error);
	}
});
