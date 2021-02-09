import {getContacts, useContacts} from './contactDataProvider.js'
import {Contact} from './contact.js'

export function ContactList(){
    getContacts()
    .then(() => {
        let allTheContacts = useContacts()
        console.log(useContacts())
        const contentTarget = document.querySelector(".contactListContainer")
        
        contentTarget.innerHTML = allTheContacts.map(singleContact => Contact(singleContact)).join("")
    }

    )
    
}