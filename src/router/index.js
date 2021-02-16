import Vue from "vue";
import VueRouter from "vue-router";
import PatientsList from "../views/pages/patients/PatientsList";
import PatientDetail from "../views/pages/patients/PatientDetail";
import PatientForm from "../views/pages/patients/PatientForm";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PatientsList",
    component: PatientsList
  },
  {
    path: "/patients/form",
    name: "PatientsForm",
    component: PatientForm
  },
  {
    path: "/patients/detail",
    name: "PatientsDetail",
    component: PatientDetail
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
  // {
  //   path: "/about",
  //   name: "exempleRoute",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
