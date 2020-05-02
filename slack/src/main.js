import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import store from "./store";

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyBCaZKnpJYHwYhHdjpNTmozk5ZWW2ce008",
  authDomain: "slack-11abb.firebaseapp.com",
  databaseURL: "https://slack-11abb.firebaseio.com",
  projectId: "slack-11abb",
  storageBucket: "slack-11abb.appspot.com",
  messagingSenderId: "517753297270",
  appId: "1:517753297270:web:25e8bc0055faeacc70c257",
  measurementId: "G-94XLXE0TJJ",
};
firebase.initializeApp(firebaseConfig);
// window.firebase = firebase;
const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //dispatch user
  store.dispatch("setUser", user);
  new Vue({
    render: (h) => h(App),
    router,
    store,
  }).$mount("#app");
  // recursion - this functio calls itself on auth state change
  unsubscribe();
});

export default firebase;
