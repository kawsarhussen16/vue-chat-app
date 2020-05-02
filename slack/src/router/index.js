import Vue from "vue";
import Router from "vue-router";
import Chat from "../pages/Chat.vue";
import Login from "../pages/Login.vue";
import firebase, { auth } from "../main";

Vue.use(Router);
console.log(auth);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Chat",
      component: Chat,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
          next("/login");
        } else {
          next();
        }
      },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
  mode: "history",
});
