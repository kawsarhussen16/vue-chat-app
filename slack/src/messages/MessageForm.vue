<template>
  <div>
    <div class="messageform">
      <form>
        <div action class="input-group mb-3">
          <input
            name="message"
            id="message"
            placeholder="Write something"
            type="text"
            class="form-control"
          />
          <div class="input-group-append">
            <button class="btn btn-primary mt-3" type="button">&nbsp; Send &nbsp;</button>
          </div>
          <div class="input-group-append">
            <button class="btn btn-warning mt-3" type="button">Upload</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "message-form"
};
</script>

<style scoped>
.messageform {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 67%;
  z-index: 100;
  color: white;
  text-align: center;
  margin-bottom: -20px;
  margin-left: 33.3%;
}
input,
button {
  height: 50px;
  margin: auto;
}
.progress {
  margin-bottom: -16px;
}
</style>