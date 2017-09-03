<template>
  <div id="app">
    <nav>
      <div class="title"> {{title}}</div>
      <router-link class="nav-item not-a" v-bind:to="{ name: 'page1' }">Home</router-link>
      <router-link class="nav-item not-a" v-bind:to="{ name: 'page2' }">page1</router-link>      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Hello Foxtail Vue Template',
      };
    },
  };
</script>

<style lang="scss">
  @import "components/style/font";
  @import "components/style/global";

  nav {
    height: 56px;
    line-height: 56px;
    .title {
      color: #333333;


    }
  }

</style>
