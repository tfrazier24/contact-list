import { saveContact } from './contactDataProvider.js'
import {ContactList} from './contactList.js'
const contentTarget = document.querySelector(".contact-container")

export const contactForm = () => {
    contentTarget.innerHTML = `
    <input type="text" placeholder="enter name.."id="contact-name"></input>
    <input type="text" placeholder="enter email" id="contact-email"></input>
    <input type="text" placeholder="###-####" id="phone-number"></input>

    <button id="saveContact">Save Contact</button>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveContact"){
        const newContact = {
            name: document.querySelector("#contact-name").value,
            email: document.querySelector("#contact-email").value,
            phoneNumber: document.querySelector("#phone-number").value
        }
        saveContact(newContact)
        .then(ContactList)
    }
})