import { createRouter, createWebHistory } from 'vue-router';
import PageNotFound from '../src/components/commons/PageNotFound.vue';
import MapComponent from '../src/components/Map/MapComponent.vue';
import adNew from '../src/components/AdNew/AdNew.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: MapComponent,
    },
    {
        path: '/add',
        name: 'add',
        component: adNew,
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;