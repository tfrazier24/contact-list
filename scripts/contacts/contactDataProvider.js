let contacts = []

export const useContacts = () => contacts.slice()

export const getContacts = () => {
    return fetch('http://localhost:8088/contacts')
    .then(response => response.json())
    .then(parsedContacts => {
        contacts = parsedContacts
    })
}

export const saveContact = contact => {
    return fetch('http://localhost:8088/contacts', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
       body:   JSON.stringify(contact)
})
.then(getContacts)
}