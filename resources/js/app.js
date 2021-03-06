
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'
import './registerServiceWorker'
// Vue Datatable
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
// Vue Sidebar Menu


import Dashboard from './layout/DashboardLayout'
import Create from './pages/Create'
import Read from './pages/Read'
import Update from './pages/Update'
import Profile from './pages/Profile'

Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(VueGoodTablePlugin)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'nav-item active',
    scrollBehavior: (to) => {
      if (to.hash) {
        return {selector: to.hash}
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes: [
        {
            path: '/admin/dashboard',
            component: Read,
            props: true
        },
        {
            path: '/admin/profile',
            component: Profile,
            props: true
        },
        {
            path: '/admin/create',
            component: Create,
            props: true
        },
        {
            path: '/admin/update',
            component: Update,
            props: true
        },
    ],
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 const app = new Vue({
     el: '#app',
     router,
     components: { Dashboard },
 });
