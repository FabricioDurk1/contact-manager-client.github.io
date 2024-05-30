import React from 'react';
import '../styles/ContactItem.css';

const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <div className="contact-item list-item">
      <h3>{contact.name}</h3>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={() => onEdit(contact)}>Edit</button>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default ContactItem;
