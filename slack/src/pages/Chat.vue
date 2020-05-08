<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 sidebar">
          <SideBar></SideBar>
        </div>
        <div class="col-md-8 content">
          <Messages />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../sidebar/Sidebar";
import firebase from "firebase/app";
import Messages from "../messages/Messages";
export default {
  name: "chat",
  components: {
    SideBar,
    Messages
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

<style scoped>
.sidebar {
  width: 33.5%;
  display: block;
  float: left;
  height: 100%;
  position: fixed;
  background: #000;
  padding-top: 2em;
  overflow: scroll;
}
.content {
  width: 66%;
  display: block;
  float: left;
  margin-left: 34%;
}
</style>
