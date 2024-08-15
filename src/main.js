import './assets/main.css'

import landingspage from './components/landingspagina.vue'
import ProductUpload from './components/ProductUpload.vue'; 
import ProductList from './components/ProductList.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import Orders from './components/OrderList.vue';

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import store from './store';


const routes = [
    { path: '/', component: landingspage, name: 'home', meta: { requiresAuth: false } },
    { path: '/sell', component: ProductUpload, name: 'sell', meta: { requiresAuth: true } },
    { path: '/list', component: ProductList, name: 'list', meta: { requiresAuth: false } },
    { path: '/signup', component: Signup, name: 'signup', meta: { requiresAuth: false } },
    { path: '/login', component: Login, name: 'login', meta: { requiresAuth: false } },
    { path: '/orders', component: Orders, name: 'orders', meta: { requiresAuth: true } },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // If a saved position is available, use it
            return savedPosition;
        } else {
            // Otherwise, scroll to the top of the page
            return { top: 0 };
        }
    },
})

router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters.isLoggedIn; // Check if the user is logged in
  
    if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
      // If the route requires auth and the user is not logged in
      next({ name: 'login' }); // Redirect to the login page
    } else {
      // If the route does not require auth or the user is logged in
      next(); // Allow the navigation
    }
});

createApp(App).use(store).use(router).mount('#app')
