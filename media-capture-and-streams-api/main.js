import "./../style.css";
import "./style.css";

const video = document.querySelector("#video");
const getVideoButton = document.querySelector("#get-video-button");
const savePhotoButton = document.querySelector("#save-photo-button");

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

let imageCapture;

const getVideo = async () => {
	try {
		const mediaStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
		video.srcObject = mediaStream;
		video.play();

		const track = mediaStream.getVideoTracks()[0];
		imageCapture = new ImageCapture(track);
	} catch (error) {
		console.error(error);
	}
};

const takePhoto = async () => {
	try {
		const imageBitMap = await imageCapture.grabFrame();
		canvas.width = imageBitMap.width;
		canvas.height = imageBitMap.height;

		context.drawImage(imageBitMap, 0, 0);
	} catch (error) {
		console.error(error);
	}
};

getVideoButton.addEventListener("click", getVideo);
savePhotoButton.addEventListener("click", takePhoto);
