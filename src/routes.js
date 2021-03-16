import Vue from "vue";
import Router from "vue-router";
const Promo = () => import("./components/Promo");
const Register = () => import("./components/Register");
const Login = () => import("./components/login");
const Main = () => import("./components/Main");
const Projects = () => import("./components/Projects");
const ForgetPassword = () => import("./components/ForgetPassword");
const Logout = () => import("./components/logout");

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Promo",
      component: Promo,
    },
    {
      path: "/user",
      name: "Main",
      component: Main,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/forgetPassword",
      name: "ForgetPassword",
      component: ForgetPassword,
    },
    {
      path: "/logout",
      name: "Logout",
      component: Logout,
    },
  ],
});

export default router;
