import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import ProductsPage from '@/components/ProductsPage.vue';
import Checkout from '@/components/Checkout.vue'; 

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/products',
        component: ProductsPage
    },
	{
	  path: '/checkout',
	  component: Checkout,
	  props: (route) => ({ total: route.query.total })
	},
    {
        path: '/',
        redirect: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
