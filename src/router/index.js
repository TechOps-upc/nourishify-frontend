import { createRouter, createWebHistory } from "vue-router";
import HeaderContent from "../shared/components/header-content.component.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/header-content",
            component:HeaderContent,

        }
    ],
});

export default router;
