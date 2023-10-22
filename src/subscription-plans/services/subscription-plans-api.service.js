import http from "../../shared/services/http-common.js";


export class SubscriptionPlansApiService {
    getAll() {
        return http.get("subscription-plans");
    }
}