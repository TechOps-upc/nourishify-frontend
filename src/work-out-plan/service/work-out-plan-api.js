import http from "@/shared/services/http-common.js";

export class WorkOutPlanApiService {
    getAll(){
        return http.get("work-out-plans")
    }
}