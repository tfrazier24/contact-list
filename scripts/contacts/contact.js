//This function will build an HTML representation of a single Contact
export const Contact = contactObject => `
    <div class="contact-card">
        <p>${contactObject.name}</p>
        <p> Email: ${contactObject.email}</p>
        <p> Phone Number: ${contactObject.phoneNumber}</p>
    </div>
`