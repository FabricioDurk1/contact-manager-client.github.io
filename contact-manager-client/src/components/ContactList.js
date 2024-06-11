import React from 'react';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <div>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </div>
            <div>
              <button className="update" onClick={() => onEdit(contact)}>Edit</button>
              <button className="delete" onClick={() => onDelete(contact.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;




