import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',  // Cambia la URL a la de tu backend
});

export { api };
