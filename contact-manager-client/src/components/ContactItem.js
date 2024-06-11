import React from 'react';

const ContactItem = ({ contact, onEdit, onDelete }) => (
  <li>
    <p>{contact.name}</p>
    <p>{contact.email}</p>
    <p>{contact.phone}</p>
    <button onClick={() => onEdit(contact)}>Edit</button>
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

export default ContactItem;







