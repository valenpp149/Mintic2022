import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import LogIn from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'

const routes = [{
    path: '/',
    name: 'root',
    component: App
    },

    {
        path: '/user/login',
        name: "logIn",
        component: LogIn
    },

    {
        path: '/user/signUp',
        name: "signUp",
        component: SignUp
    },

    {
        path: '/user/home',
        name: "home",
        component: Home
    }

];
const router = createRouter({
history: createWebHistory(),
routes,
});
export default router;