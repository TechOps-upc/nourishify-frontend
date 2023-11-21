import http from "@/shared/services/http-common.js";
class FoodPlanApiService {
    getAll() {
        return http.get("food-plans");
    }
}

class SubscriptionPlansApiService {
    getAll() {
        return http.get("subscription-plans");
    }
}

class AuthService {
    fetchClientByCredentials(email, password) {
        return http.get(`clients?email=${email}&password=${password}`);
    }

    fetchNutritionistByCredentials(email, password) {
        return http.get(`nutritionists?email=${email}&password=${password}`);
    }

    getUserById(id) {
        return http.get(`clients/${id}`);
    }

    getNutritionistById(id) {
        return http.get(`nutritionists/${id}`);
    }
}

export { FoodPlanApiService, SubscriptionPlansApiService, AuthService };


