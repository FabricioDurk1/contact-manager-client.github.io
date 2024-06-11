// services/contactService.js

import axios from 'axios';

// URL da API
const apiUrl = 'http://localhost:5000/api/contact';

// Função para obter todos os contatos
const getContacts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('There was an error making the GET request:', error);
    throw error;
  }
};

// Função para obter um contato pelo ID
const getContactById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`There was an error making the GET request for ID ${id}:`, error);
    throw error;
  }
};

// Função para criar um novo contato
const createContact = async (contact) => {
  try {
    const response = await axios.post(apiUrl, contact);
    return response.data;
  } catch (error) {
    console.error('There was an error making the POST request:', error);
    throw error;
  }
};

// Função para atualizar um contato
const updateContact = async (id, contact) => {
  try {
    await axios.put(`${apiUrl}/${id}`, contact);
  } catch (error) {
    console.error(`There was an error making the PUT request for ID ${id}:`, error);
    throw error;
  }
};

// Função para deletar um contato
const deleteContact = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.error(`There was an error making the DELETE request for ID ${id}:`, error);
    throw error;
  }
};

// Exportando todas as funções
export {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};

