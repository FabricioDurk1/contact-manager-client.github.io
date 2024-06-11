import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ name, email, phone });
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;
