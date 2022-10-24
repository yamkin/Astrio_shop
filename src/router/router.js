import {createRouter, createWebHistory} from "vue-router";

import MainPage from "@/pages/MainPage";
import CartPage from "@/pages/CartPage";

const routes = [
    {
        path: '/',
        name: "main",
        component: MainPage
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartPage,
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;