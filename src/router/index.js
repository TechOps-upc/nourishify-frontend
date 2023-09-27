import { createRouter, createWebHistory } from "vue-router";
import HeaderContent from "../shared/components/header-content.component.vue";
import HowSignUpComponent from "@/public/pages/how-sign-up.component.vue";
import LogInFormComponent from "@/log-in/components/log-in-form.component.vue";
import LogInClientsComponent from "@/log-in/pages/log-in-clients.component.vue";
import LogInNutritionistComponent from "@/log-in/pages/log-in-nutritionist.component.vue";
import HowLogInComponent from "@/public/pages/how-log-in.component.vue";
import ToolbarComponent from "@/shared/components/toolbar.component.vue";
import Profile from "@/profile/pages/profile.component.vue";
import ProfileDataComponent from "@/profile/components/profile-data.component.vue";
import profileDataComponent from "@/profile/components/profile-data.component.vue";
import foodPlanComponent from "@/food-plan/pages/food-plan.component.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            component:HowLogInComponent,
        },

        {
            path:"/header-content",
            component:HeaderContent,
        },

        {
            path:"/how-sign-up",
            component:HowSignUpComponent,
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
        },

        {
            path:"/toolbar",
            component:ToolbarComponent,

        },
        {
            path:"/profile/:id",
            component:Profile

        },

        {
            path:"/food-plan",
            component:foodPlanComponent,
        }


    ]
});

export default router;
