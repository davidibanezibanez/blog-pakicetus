import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import PostDetails from '../components/PostDetails.vue';
import Login from '../views/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/login',
            name: 'login',
            component: Login

        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/post/:id',
            name: 'postDetails',
            component: PostDetails
        }
    ]
});

export default router;
