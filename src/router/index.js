import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sobre from "../views/Sobre.vue";
import DivisaOro from "../views/DivisaOro.vue";
import FinalizarCompra from "../views/FinalizarCompra.vue";
import FrancoZuniga from "../views/FrancoZuniga.vue";

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
    },
    {
        path: "/francozuniga",
        name: "FrancoZuniga",
        component: FrancoZuniga
    },
    {
        path: "/finalizarcompra",
        name: "FinalizarCompra",
        component: FinalizarCompra
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;