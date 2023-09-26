import { createRouter, createWebHistory } from "vue-router";
import HeaderContent from "../shared/components/header-content.component.vue";
import HowSignUp from "@/public/pages/how-sign-up.component.vue";
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
        }
    ],
});

export default router;
