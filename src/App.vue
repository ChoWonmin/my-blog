<template>
  <div id="app">
    <nav>
      <div class="nav-content">
        <div class="title">
          <router-link class="nav-item not-a" v-bind:to="{ name: 'page1' }">{{title}}</router-link>
        </div>

        <div class="nav-item-group">
          <router-link class="nav-item not-a" v-bind:to="{ name: 'page2' }">page2</router-link>
          <router-link class="nav-item not-a" v-bind:to="{ name: 'page3' }">page3</router-link>
        </div>
      </div>
    </nav>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Foxtail Vue Template',
      };
    },
  };
</script>

<style lang="sass">
  @import "components/style/font"
  @import "components/style/global"
  @import "components/style/nav"

  .name
    font-size : 12px

  .fade-enter-active, .fade-leave-active
    transition-property: opacity
    transition-duration: .25s

  .fade-enter-active
    transition-delay: .25s

  .fade-enter, .fade-leave-active
    opacity: 0


</style>
