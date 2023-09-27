import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Asegúrate de que esta URL comienza con 'https://'.

export const getFoodPlanById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/foodPlan/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching the food plan:", error);
        return null;
    }
};
