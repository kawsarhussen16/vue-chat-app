<template>
  <div>
    <h2 class="text-light">#SLACK#</h2>
    <hr style="border: 1px solid #333;" />
    <span>
      <img class="rounded-circle mr-2" height="30" :src="currentUser.photoURL" />
      <span class="taxt-light mr-2">{{currentUser.displayName}}</span>
    </span>
    <button @click="logout" class="btn btn-outline-light">Logout</button>
    <hr style="border: 1px solid #333;" />
    <Channels></Channels>
  </div>
</template>
<script>
import firebase from "firebase/app";
import { mapGetters } from "vuex";
import Channels from "./Channels";
export default {
  name: "sidebar",
  components: { Channels },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      this.$store.dispatch("setUser", null);
      this.$router.push("/login");
    }
  }
};
</script>
