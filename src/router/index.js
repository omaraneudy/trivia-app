import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Trivias from "../views/Trivias.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/trivias",
            name: "trivias",
            component: Trivias
        }
    ]
})

export default router;