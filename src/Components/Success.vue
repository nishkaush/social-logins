<template>
<div>
  <h1>Login Successful! Congratulations!</h1>
  <button @click="logout">Logout</button>
</div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    logout() {
      window.location.href =
        "https://my-social-logins-test.auth.ap-southeast-2.amazoncognito.com/logout?client_id=3908nvkpmk&logout_uri=http://localhost:8080/logout";
    }
  }
};
</script>
