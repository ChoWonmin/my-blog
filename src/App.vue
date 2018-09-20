<script src="js/firebase.wrapper.js"></script>
<template>
  <div id="app">
    <!--<div class="nav">-->
      <!--<div class="nav-content">-->
        <!--<div class="title">-->
          <!--<div class="nav-item">나의 블로그</div>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div class="nav-item-group">-->
        <!--<div class="nav-item">page1</div>-->
        <!--<div class="nav-item">page2</div>-->
        <!--<div class="nav-item">page3</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="sector">
      <div class="content-view">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Vue Template',
      };
    },
  };
</script>

<style lang="sass">
  @import "components/style/font"
  @import "components/style/global"
  @import "components/style/grid"

  *
    box-sizing: border-box

  body
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif
    font-weight: 400
    font-height: 400
    padding: 0
    margin: 0

  .card
    @include card(0.12,12)
    @include border-radius(3px)

  .flex
    display: flex

  #app
    width: 100%
    height: 100vh
    overflow: hidden
    display: flex
    .nav
      background: #333333
      height: 100%
      width: 40px
      transition: width .2s
      &:hover
        width: 100px
      .title
        width: 100% !important
      .nav-item
        width: 100% !important
      .nav-item-group
        width: 100%
        .nav-item
          white-space: nowrap
          display: block
          width: 100%

    .sector
      flex: 1
      height: 100%
      .inner-nav
        height: 56px
        background: #1cccc6
      .content-view
        overflow-y: scroll !important
        background: #FFFFFF
        height: calc(100% - 56px)


</style>
