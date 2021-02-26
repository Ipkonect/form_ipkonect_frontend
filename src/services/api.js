import axios from 'axios';

const api = axios.create({
    baseURL: 'https://form-ipkonect-backend.herokuapp.com/'
});

export default api;