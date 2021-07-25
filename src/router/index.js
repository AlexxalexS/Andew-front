import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ImagePalette from "../views/ImagePalette";
import Portfolio from "../views/Portfolio";

Vue.use(VueRouter);

const routes = [
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
    path: '/:id',
    name: "ImagePalette",
    props: true,
    component: ImagePalette,
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
