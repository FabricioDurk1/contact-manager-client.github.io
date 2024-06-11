import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, updateContact, editingContact }) => {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    } else {
      setContact({ name: '', email: '', phone: '' });
    }
  }, [editingContact]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      updateContact(contact.id, contact);
    } else {
      addContact(contact);
    }
    setContact({ name: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required />
      <input type="tel" name="phone" value={contact.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">{editingContact ? 'Update' : 'Add'} Contact</button>
    </form>
  );
};

export default ContactForm;




