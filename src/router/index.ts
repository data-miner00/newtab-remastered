import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings/index.vue"),
    children: [
      {
        path: "",
        name: "user",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/Settings/User.vue"),
      },
      {
        path: "quicklinks",
        name: "quicklinks",
        component: () =>
          import(
            /* webpackChunkName: "quicklinks" */ "../views/Settings/Quicklinks.vue"
          ),
      },
      {
        path: "clock",
        name: "clock",
        component: () =>
          import(/* webpackChunkName: "clock" */ "../views/Settings/Clock.vue"),
      },
      {
        path: "background",
        name: "background",
        component: () =>
          import(
            /* webpackChunkName: "background" */ "../views/Settings/Background.vue"
          ),
      },
      {
        path: "server",
        name: "server",
        component: () =>
          import(
            /* webpackChunkName: "server" */ "../views/Settings/Server.vue"
          ),
      },
      {
        path: "about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Settings/About.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
