import './assets/main.css'

import landingspage from './components/landingspagina.vue'
import ProductUpload from './components/ProductUpload.vue'; 

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

const routes = [
    { path: '/', component: landingspage, name: 'home', meta: { requiresAuth: false } },
    { path: '/sell', component: ProductUpload, name: 'sell', meta: { requiresAuth: false } },
    
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

createApp(App).use(router).mount('#app')
