import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { getContacts, createContact, updateContact, deleteContact } from './services/contactService';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null); // Utilize editingContact

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContacts();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const addContact = async (newContact) => {
    try {
      const createdContact = await createContact(newContact);
      setContacts([...contacts, createdContact]);
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const handleUpdateContact = async (id, updatedContact) => {
    try {
      await updateContact(id, updatedContact);
      setContacts(
        contacts.map((contact) =>
          contact.id === id ? updatedContact : contact
        )
      );
      setEditingContact(null);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
  };

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <ContactForm
        addContact={addContact}
        updateContact={handleUpdateContact}
        editingContact={editingContact}
      />
      <ContactList
        contacts={contacts}
        onEdit={handleEditContact}
        onDelete={handleDeleteContact}
      />
    </div>
  );
};

export default App;


