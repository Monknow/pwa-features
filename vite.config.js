import {defineConfig} from "vite";
import {resolve} from "path";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				batteryStatusApi: resolve(__dirname, "battery-status-api/index.html"),
				contactPickerApi: resolve(__dirname, "contact-picker-api/index.html"),
				deviceMotionApi: resolve(__dirname, "device-motion-api/index.html"),
				deviceOrientationApi: resolve(__dirname, "device-orientation-api/index.html"),
				fileSystemAccessApi: resolve(__dirname, "file-system-access-api/index.html"),
				geolocationApi: resolve(__dirname, "geolocation-api/index.html"),
				mediaCaptureAndStreamsApi: resolve(__dirname, "media-capture-and-streams-api/index.html"),
				screenOrientationApi: resolve(__dirname, "screen-orientation-api/index.html"),
				vibrationApi: resolve(__dirname, "vibration-api/index.html"),
				webBluetoothApi: resolve(__dirname, "web-bluetooth-api/index.html"),
			},
		},
	},
	server: {
		https: true,
		host: true,
	},
	plugins: [mkcert()],
});
