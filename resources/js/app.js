require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from '@views/App'
import Home from '@views/Home'
import Hello from '@views/Hello'
import UsersIndex from '@views/UsersIndex'
import EditUser from '@views/EditUser'

const routes = [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex
        },
        {
            path: '/users/:id/edit',
            name: 'users.edit',
            component: EditUser,
        }
    ];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

const app = new Vue({
    el: '#app',
    components: {
        App,
    },
    router,
});
