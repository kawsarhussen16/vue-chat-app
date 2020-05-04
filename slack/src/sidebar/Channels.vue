<template>
  <div>
    <button @click="openModal" class="btn btn-outline-primary">Add Channel</button>
    <div class="modal fade" id="channelModal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-dark">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input
                  v-model="new_channel"
                  type="text"
                  id="new_channel"
                  name="new_channel"
                  class="form-control"
                />
                <ul class="list-group" v-if="hasErrors">
                  <li
                    class="list-group-item text-danger"
                    v-for="error in errors"
                    :key="error"
                  >{{error}}</li>
                </ul>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button @click="addChannel" type="button" class="btn btn-primary">Add Channel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
require("firebase/database");
import $ from "jquery";
require("bootstrap/js/dist/modal");
export default {
  name: "channels",
  data() {
    return {
      new_channel: "",
      errors: [],
      channelRef: firebase.database().ref("channels")
    };
  },
  computed: {
    hasErrors() {
      return this.errors.length > 0;
    }
  },
  methods: {
    openModal() {
      $("#channelModal")
        .appendTo("body")
        .modal("show");
    },
    addChannel() {
      let key = this.channelRef.push().key;
      let newChannel = { id: key, name: this.new_channel };
      this.channelRef
        .child(key)
        .update(newChannel)
        .then(() => {
          this.new_channel = "";
          $("channelModal").modal("hide");
        })
        .catch(error => {
          this.errors.push(error.message);
        });
    }
  }
};
</script>
