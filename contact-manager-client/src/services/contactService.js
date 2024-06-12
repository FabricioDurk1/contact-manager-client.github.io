import axios from 'axios';


// const apiUrl = 'http://localhost:5000/api/contact';
const apiUrl = 'http://localhost:7266/api/contact';



const getContacts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getContactById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createContact = async (contact) => {
  try {
    const response = await axios.post(apiUrl, contact, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateContact = async (id, contact) => {
  try {
    await axios.put(`${apiUrl}/${id}`, contact);
  } catch (error) {
    throw error;
  }
};

const deleteContact = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    throw error;
  }
};

export {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};