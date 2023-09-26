import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const fetchClientByCredentials = (email, password) => {
    return axios.get(`${BASE_URL}/nutritionists?email=${email}&password=${password}`);
}
