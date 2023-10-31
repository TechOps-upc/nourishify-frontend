import http from "../../shared/services/http-common.js";


export class PaymentApiService {
    getById(id) {
        return http.get(`subscription-plans/${id}`);
    }
}