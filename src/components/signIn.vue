<template lang="jade">
  .login-wrap.card
    .login
      .input-wrap
        input.id
      .input-wrap
        input.password

      Button(:name="'login'", v-on:click="signin")

</template>

<script>
  import { authModule } from '../js/firebase.wrapper';
  import Button from './lib/button';

  export default {
    components: { Button },
    methods: {
      signin() {
        authModule.signIn();
      },
    },
  };
</script>

<style lang="sass" scoped>
  .login-wrap
    margin: 50px auto
    width: 380px
    height: 720px
    .login
      margin-top: 150px
      padding: 20px
      .input-wrap
        margin: 50px 0

</style>
