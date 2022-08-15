import {defineConfig} from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: "./index.html",
				batteryStatusApi: "./battery-status-api/index.html",
				contactPickerApi: "./contact-picker-api/index.html",
				deviceMotionApi: "./device-motion-api/index.html",
				deviceOrientationApi: "./device-orientation-api/index.html",
				fileSystemAccessApi: "./file-system-access-api/index.html",
				geolocationApi: "./geolocation-api/index.html",
				mediaCaptureAndStreamsApi: "./media-capture-and-streams-api/index.html",
				screenOrientationApi: "./screen-orientation-api/index.html",
				vibrationApi: "./vibration-api/index.html",
				webBluetoothApi: "./web-bluetooth-api/index.html",
			},
		},
	},
	server: {
		https: true,
		host: true,
	},
	plugins: [mkcert()],
});
