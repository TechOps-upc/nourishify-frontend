import { createRouter, createWebHistory } from "vue-router";
import HeaderContent from "../shared/components/header-content.component.vue";
import HowSignUp from "@/public/pages/how-sign-up.component.vue";
import LogInFormComponent from "@/log-in/components/log-in-form.component.vue";
import LogInClientsComponent from "@/log-in/pages/log-in-clients.component.vue";
import LogInNutritionistComponent from "@/log-in/pages/log-in-nutritionist.component.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/header-content",
            component:HeaderContent,
        },
        {
            path:"/how-sign-up",
            component:HowSignUp,
        },
        {
            path:"/log-in-form",
            component:LogInFormComponent
        },
        {
            path:"/log-in-clients",
            component:LogInClientsComponent
        },
        {
            path:"/log-in-nutritionist",
            component:LogInNutritionistComponent,
        }

    ],
});

export default router;
