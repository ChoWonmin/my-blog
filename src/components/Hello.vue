<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Hello Foxtail - Vue-cli + webpack + sass',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  h4
    font-size: 14px
    color: #eee
</style>

<style lang="sass">
  @import '../components/global'
</style>
