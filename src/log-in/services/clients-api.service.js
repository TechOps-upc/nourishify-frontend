import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const fetchClientByCredentials = (email, password) => {
    return axios.get(`${BASE_URL}/clients?email=${email}&password=${password}`);
}
