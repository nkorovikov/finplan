import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/History.vue"),
  },
  {
    path: "/report",
    name: "Report",
    component: () => import("../views/Report.vue"),
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import("../views/Categories.vue"),
  },
  {
    path: "/categories/create",
    name: "CategoriesCreate",
    component: () => import("../views/CategoriesCreate.vue"),
  },
  {
    path: "/categories/:id/update",
    name: "CategoriesUpdate",
    component: () => import("../views/CategoriesUpdate.vue"),
    props: true,
  },
  {
    path: "/categories/:id/show",
    name: "CategoriesShow",
    component: () => import("../views/CategoriesShow.vue"),
    props: true,
  },
  {
    path: "/categories/:id/sub-category-create",
    name: "SubCategoryCreate",
    component: () => import("../views/SubCategoryCreate.vue"),
    props: true,
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/settings/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/settings/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/cloud",
    name: "FinplanCloud",
    component: () => import("../views/FinplanCloud/Index.vue"),
  },
  {
    path: "/cloud/login",
    name: "Login",
    component: () => import("../views/FinplanCloud/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
