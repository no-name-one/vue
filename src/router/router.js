import {createRouter, createWebHistory} from "vue-router";
import About1 from "@/pages/About1.vue";
import About2 from "@/pages/About2.vue";
import Books from "@/pages/Books.vue";
import Main from "@/pages/Main.vue";

const routes = [
    {
        path: '/about1',
        component: About1
    },
    {
        path: '/about2',
        component: About2
    },
    {
        path: '/books',
        component: Books
    },
    {
        path: '/',
        component: Main
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;