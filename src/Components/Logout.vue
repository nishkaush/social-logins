<template>
  <div>
    <h1>You have looged out Successfullly!</h1>
    <button @click="backToHome">Back To home</button>
  </div>
</template>

<script>
export default {
  methods: {
    backToHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
