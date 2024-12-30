import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Lee la URL de la variable de entorno

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const removeTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_URL}/${id}`, task);
  return response.data;
};
