import { createRouter, createWebHistory } from "vue-router";
import HeaderContent from "../shared/components/header-content.component.vue";
import HowSignUpComponent from "@/public/pages/how-sign-up.component.vue";
import LogInFormComponent from "@/log-in/components/log-in-form.component.vue";
import LogInClientsComponent from "@/log-in/pages/log-in-clients.component.vue";
import LogInNutritionistComponent from "@/log-in/pages/log-in-nutritionist.component.vue";
import HowLogInComponent from "@/public/pages/how-log-in.component.vue";
import ToolbarComponent from "@/shared/components/client-toolbar.component.vue";
import foodPlanComponent from "@/food-plan/pages/food-plan.component.vue";
import NutritionistToolbarComponent from "@/shared/components/nutritionist-toolbar.component.vue";
import NutritionistProfileComponente from "@/profile/pages/nutritionist-profile.componente.vue";
import ClientsProfileComponent from "@/profile/pages/clients-profile.component.vue";
import SearchNutritionistComponent from "@/cliente-sidebar/search-nutritionist/pages/search-nutritionist.component.vue";
import SubscriptionPlans from "@/subscription-plans/pages/subscription-plan.component.vue";
import RegisterFormPageComponent from "@/register-form/pages/register-form-page.component.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {path:"/", component:HowLogInComponent,},

        {path:"/header-content", component:HeaderContent,},

        {path:"/how-sign-up", component:HowSignUpComponent,},

        {path:"/log-in-form", component:LogInFormComponent},

        {path:"/log-in-clients", component:LogInClientsComponent},
        {path:"/log-in-nutritionist", component:LogInNutritionistComponent,},

        { path: "/toolbar", component: ToolbarComponent },
        { path: "/toolbar-nutritionist", component: NutritionistToolbarComponent },
        {path:"/clients-profile/:id", component:ClientsProfileComponent},

        {path:"/food-plan/:id", component:foodPlanComponent,},
        {path:"/nutritionist-profile/:id", component:NutritionistProfileComponente,},

        {path:"/search-nutritionist", component:SearchNutritionistComponent},

        {path:"/subscription-plans", component:SubscriptionPlans},
        {path:"/register-form", component:RegisterFormPageComponent}

    ]
});

export default router;
