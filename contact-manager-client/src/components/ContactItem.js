import React from 'react';

const ContactItem = ({ contact }) => (
    <li>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
    </li>
);

export default ContactItem;




