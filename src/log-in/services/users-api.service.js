import http from "../../shared/services/http-common.js";

const BASE_URL = 'http://localhost:3000';

const fetchClientByCredentials = (email, password) => {
    return http.get(`${BASE_URL}/clients?email=${email}&password=${password}`);
}

const fetchNutritionistByCredentials=(email,password)=>{
    return http.get(`${BASE_URL}/nutritionists?email=${email}&password=${password}`);
}

export {fetchNutritionistByCredentials};
export {fetchClientByCredentials};