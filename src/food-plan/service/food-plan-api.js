import axios from 'axios';
import http from "@/shared/services/http-common.js";

export class FoodPlanApiService {
    getAll() {
        return http.get("food-plans");
    }
}
