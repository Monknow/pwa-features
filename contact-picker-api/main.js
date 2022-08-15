import "./../style.css";
import "./style.css";

const getContactsButton = document.querySelector("#get-contacts-button");
const contactList = document.querySelector("#contact-list");

const props = ["name", "email", "tel", "icon"];
const opts = {multiple: true};

const getContacts = async () => {
	try {
		const supported = "contacts" in navigator && "ContactsManager" in window;

		if (!supported) throw "not-supported";

		const contacts = await navigator.contacts.select(props, opts);

		contacts.forEach(({name, email, tel, icon}) => {
			const contactElement = document.createElement("li");
			contactElement.innerText = `${name}: ${tel ?? email}`;
			contactList.appendChild(contactElement);

			if (icon.length > 0) {
				const imageUrl = URL.createObjectURL(icon[0]);
				const imageElement = document.createElement("img");
				imageElement.src = imageUrl;
				imageElement.className = "icon";
				contactElement.appendChild(imageElement);
			}
		});
	} catch (error) {
		error === "not-supported" ? alert("Conctacts API nos supported") : console.error(error);
	}
};

getContactsButton.addEventListener("click", getContacts);
