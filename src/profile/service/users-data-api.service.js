import http from "../../shared/services/http-common.js";

const BASE_URL = 'http://localhost:3000';

const getUserById = (id) => {
    return http.get(`${BASE_URL}/clients/${id}`);


}

export { getUserById };


const getNutritionistById = (id) => {
    return http.get(`${BASE_URL}/nutritionists/${id}`);
}

export { getNutritionistById };