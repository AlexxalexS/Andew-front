import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../views/Home.vue";
import ImagePalette from "../views/ImagePalette";
import Portfolio from "../views/Portfolio";
import Page404 from "../views/404"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio
      },
      {
        path: '/portfolio/:id',
        name: "images",
        props: true,
        component: ImagePalette,
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: Page404
  }
  // example
  /*
    {
      path: "/",
      component: UserLayout,
      children: [
        {
          path: "",
          name: "Ticket-Empty",
          component: () => import("@/views/TicketEmpty")
        }
      ],
      beforeEnter: userCheck
    }
    */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
