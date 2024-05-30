import React from 'react';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <ContactList />
    </div>
  );
};

export default App;

