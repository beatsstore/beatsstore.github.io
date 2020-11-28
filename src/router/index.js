import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sobre from "../views/Sobre.vue";
import DivisaOro from "../views/DivisaOro.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/sobre",
        name: "Sobre",
        component: Sobre
    },
    {
        path: "/divisaoro",
        name: "DivisaOro",
        component: DivisaOro
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;