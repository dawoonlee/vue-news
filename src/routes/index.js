import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/news",
        },
        // path: url 주소
        // name: router 이름
        // component: url 주소로 갔을 때 보여줄 컴포넌트
        {
            path: "/news",
            name: "news",
            // component: createListView("NewsView"),
        },
        {
            path: "/ask",
            name: "ask",
            component: createListView("AskView"),
            beforeEnter: (to, from) => {
                // reject the navigation
                console.log(to);
                console.log(from);
                return false;
            },
        },
        {
            path: "/jobs",
            name: "jobs",
            component: createListView("JobsView"),
        },
        {
            path: "/user/:id",
            name: "USER",
            component: UserView,
        },
        {
            path: "/item/:id",
            name: "ITEM",
            component: ItemView,
        },
    ],
});
