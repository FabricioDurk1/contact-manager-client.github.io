import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { createContact } from './services/contactService';

const App = () => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        createContact(contact).then(response => {
            setContacts([...contacts, response.data]);
        });
    };

    return (
        <div>
            <h1>Contact Manager</h1>
            <ContactForm addContact={addContact} />
            <ContactList contacts={contacts} />
        </div>
    );
};

export default App;


