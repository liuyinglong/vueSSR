import Vue from 'vue'
import Router from 'vue-router'
import Index from "../views/Index/Index.vue"
import Detail from "../views/Detail/Detail.vue"
import ErrorPage from "../views/ErrorPage.vue"

import tools from "../plugins/tools"

Vue.use(Router)
let mode = typeof window !== "undefined" ? (tools.IEVersion() === 9 ? "hash" : "history") : "history"


export function createRouter() {
    return new Router({
        mode: mode,
        fallback: false,
        scrollBehavior: () => ({y: 0}),
        routes: [
            {path: '/', component: Index},
            {path: '/detail/:id', component: Detail},
            {path: '/error', component: ErrorPage}
        ]
    })
}