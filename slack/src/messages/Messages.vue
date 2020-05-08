<template>
  <div>
    <SingleMessage />
    <MessageForm />
  </div>
</template>

<script>
import MessageForm from "./MessageForm";
import SingleMessage from "./SingleMessage";
export default {
  name: "messages",
  components: {
    SingleMessage,
    MessageForm
  }
};
</script>