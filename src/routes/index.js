import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			redirect: "/news",
		},
		{
			// path: url 주소
			path: "/news",
			// name: router 이름
			name: "NEWS",
			// component: url 주소로 갔을 때 보여줄 컴포넌트
			component: NewsView,
		},
		{
			path: "/ask",
			name: "ASK",
			component: AskView,
		},
		{
			path: "/jobs",
			name: "JOBS",
			component: JobsView,
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
