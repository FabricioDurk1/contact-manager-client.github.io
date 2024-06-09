import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/ContactItem.css';

const ContactItem = ({ contact, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);

    const handleEdit = () => {
        onEdit({ ...contact, name, email, phone });
        setIsEditing(false);
    };

    return (
        <div className="contact-item">
            {isEditing ? (
                <>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                <>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(contact.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactItem;



