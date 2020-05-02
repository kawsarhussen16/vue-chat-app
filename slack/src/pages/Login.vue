<template>
  <div class="login-container">
    <div class="jumbotron bg-primary text-white text-center">
      <h2 class="lead display-3">#SLACK#</h2>
      <p>Realtime communication</p>
    </div>
    <div class="alert alert-info" v-if="loading">Processing..</div>
    <div class="alert alert-danger" v-if="hasErrors">
      <div v-for="error in errors" :key="error">{{ error }}</div>
    </div>
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col text-center">
          <button @click="loginWithGoogle" class="btn btn-outline-danger btn-md">Login with Google</button>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <button
            @click="loginWithTwitter"
            class="btn btn-outline-primary btn-md"
          >Login with Twitter</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { auth } from "../main";
import firebase from "firebase/app";
export default {
  name: "login",
  data() {
    return {
      errors: [],
      loading: false,
      usersRef: firebase.database().ref("users")
    };
  },
  computed: {
    hasErrors() {
      return this.errors.length > 0;
    }
  },
  methods: {
    loginWithGoogle() {
      this.loading = true;
      this.errors = [];
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => {
          this.saveUsers(res.user);
          this.$store.dispatch("setUser", res.user);
          this.$router.push("/");
        })
        .catch(err => {
          this.errors.push(err.message);
          this.loading = false;
        });
    },
    saveUsers(user) {
      return this.usersRef.child(user.uid).set({
        name: user.displayName,
        avatar: user.photoURL
      });
    },
    loginWithTwitter() {
      this.loading = true;
      this.errors = [];
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.TwitterAuthProvider())
        .then(res => {
          this.$store.dispatch("setUser", res.user);
          this.$router.push("/");
        })
        .catch(err => {
          this.errors.push(err.message);
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
.btn .jumbotron {
  border-radius: 0px;
}
</style>
