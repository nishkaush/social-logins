<template>
  <div>
    <div 
    class="fb-login-button" 
    data-max-rows="1" 
    data-size="large" 
    data-button-type="continue_with" 
    data-show-faces="false" 
    data-auto-logout-link="true" 
    data-use-continue-as="false"
    ></div>
    <form>
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
      <input type="email" placeholder="emai">
      <button>Signup</button>
    </form>
    <hr>
    <hr>
    <form>
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
      <button @click.prevent="goToLoginPage">Login</button>
    </form>
  </div>
</template>


<script>
export default {
  methods: {
    goToLoginPage() {
      window.location.href =
        "https://my-social-logins-test.auth.ap-southeast-2.amazoncognito.com/login?response_type=code&client_id=3v567kpmkqbh&redirect_uri=http://localhost:8080/success";
    }
  }
};
</script>
