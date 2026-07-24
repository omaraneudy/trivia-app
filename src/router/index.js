import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Trivia from "../views/Trivia.vue";
import IniciarTrivia from "../views/IniciarTrivia.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/trivia",
            name: "trivia",
            component: Trivia
        },
        {
            path: "/iniciartrivia",
            name: "iniciartrivia",
            component: IniciarTrivia
        }
    ]
})

export default router;