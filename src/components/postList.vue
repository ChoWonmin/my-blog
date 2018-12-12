<template lang="jade">
  .full-screen
    .post-header
      .post-title
        .title-text
      .flex-item

    .post-wrap.grid
      .cell-3(v-for="item in postList")
        Post-box(:title="item.title", :text="item.description", :category="item.category", :bgColor="item.color",  v-on:click="open(item.url)")

</template>

<script>
  import { dataModule } from '../js/firebase.wrapper';
  import PostBox from './lib/postBox';
  import Button from './lib/button';

  export default {
    components: { PostBox, Button },
    data() {
      return {
        postList: {},
      };
    },
    async mounted() {
      this.postList = (await dataModule.get('/posts/')).val();
    },
    methods: {
      open(url) {
        location.href = `http://${url}`;
      },
    },
  };
</script>

<style lang="sass" scoped>
  @import "/style/variable"
  @import "/style/global"

  .full-screen
    @include card(0.12, 4)
    @include border-radius(3px)
    .post-header
      height: 64px
      padding: 0 24px
      display: flex
      align-items: center
      .post-title
        font-weight: bold
        .title-text
          font-size: 48px
      .flex-item
        flex: 1

    .modal-mask
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: rgba(0, 0, 0, .5)
      transition: opacity .3s ease
      display: table
      .modal-wrapper
        display: table-cell
        vertical-align: middle
        .modal-container
          margin: 0px auto
          padding: 20px 30px
          background-color: #ffffff
          border-radius: 4px
          box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
          transition: all .3s ease
          width: 1040px
          height: 100vh
          padding: 16px
          overflow-y: auto
          .modal-body
            .content
              margin: 48px 16px
              color: $main-color
              .content-img
                width: 100%
          .modal-footer
            .write-btn
              float: right
              width: 96px
              height: 44px
              background-color: red

</style>
