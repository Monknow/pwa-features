import "./../style.css";
import "./style.css";
import birdImage from "./bird.jpg";

const imgElement = new Image();
const canvas = document.querySelector("#canvas-element");
const context = canvas.getContext("2d");

imgElement.addEventListener("load", () => {
	canvas.width = imgElement.width;
	canvas.height = imgElement.height;
	context.drawImage(imgElement, 0, 0);
});

imgElement.src = birdImage;

const getFileButton = document.querySelector("#get-file-button");
const textFilePre = document.querySelector("#text-file-pre");
const textFileName = document.querySelector("#text-file-name");
textFileName.textContent = "hello-world.txt";
textFilePre.textContent = "hello world";

const imageFileName = document.querySelector("#image-file-name");
imageFileName.textContent = "bird.jpg";

getFileButton.addEventListener("click", async () => {
	const [fileHandle] = await window.showOpenFilePicker({
		types: [
			{
				description: "Text",
				accept: {
					"text/*": [".txt"],
				},
			},
			{
				description: "Images",
				accept: {
					"image/*": [".png", ".gif", ".jpeg", ".jpg"],
				},
			},
		],
	});
	const file = await fileHandle.getFile();

	switch (true) {
		case file.type.startsWith("text/"):
			{
				textFilePre.textContent = await file.text();
				textFileName.textContent = file.name;
			}
			break;
		case file.type.startsWith("image/"):
			{
				const fileReader = new FileReader();

				fileReader.addEventListener("load", () => {
					const blob = new Blob([fileReader.result], {type: file.type});
					imgElement.src = URL.createObjectURL(blob);
				});

				fileReader.readAsArrayBuffer(file);
				imageFileName.textContent = file.name;
			}
			break;
		default: {
			alert(`type ${file.type} not supported`);
		}
	}
});

const saveTextFileButton = document.querySelector("#save-text-file-button");

saveTextFileButton.addEventListener("click", async () => {
	const textFile = new File([textFilePre.textContent], textFileName.textContent, {
		type: "text/plain",
	});
	const handle = await window.showSaveFilePicker({suggestedName: textFileName.textContent});
	const writable = await handle.createWritable();
	await writable.write(textFile);
	await writable.close();
});

const saveImageFile = document.querySelector("#save-image-file-button");

saveImageFile.addEventListener("click", async () => {
	const handle = await window.showSaveFilePicker({suggestedName: imageFileName.textContent});
	const writable = await handle.createWritable();

	canvas.toBlob(async (data) => {
		await writable.write(data);
		await writable.close();
	}, "image/jpeg");
});
