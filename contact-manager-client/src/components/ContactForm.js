import React, { useState, useEffect } from 'react';
import '../styles/ContactForm.css';

const ContactForm = ({ onSave, editContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState(null);

  useEffect(() => {
    if (editContact) {
      setName(editContact.name);
      setEmail(editContact.email);
      setPhone(editContact.phone);
      setId(editContact.id);
    } else {
      setName('');
      setEmail('');
      setPhone('');
      setId(null);
    }
  }, [editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id, name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
    setId(null);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ContactForm;
