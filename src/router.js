import { createWebHistory, createRouter } from "vue-router";

import PublicLayout from "./layouts/publicLayout.vue";
import DashboardLayout from "./layouts/DashboardLayout.vue";

import homeView from "./views/dashboard/homeView.vue";
import iniciarSesionView from "./views/auth/iniciarSesionView.vue";

const routes = [
    {
        path: '/',
        component: PublicLayout,
        children: [
            { path: '', component: iniciarSesionView },
        ]
    },
    {
        path: "/dashboard",
        component: DashboardLayout,
        children: [
            { path: '', component: homeView }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})