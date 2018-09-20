<template lang="jade">
  .post-wrap(v-on:click="onClick")
    .post-header(v-bind:style="{backgroundColor:bgColor}")
      .text {{category}}
    .post
      .title
        .text {{title}}
        .bar
      .intro
        .text {{text}}
    .post-footer

</template>

<script>
    export default {
      props: {
        category: {
          type: String,
          default: 'Node',
        },
        bgColor: {
          type: String,
          default: '#F1C40F',
        },
        title: {
          type: String,
          default: 'Title',
        },
        text: {
          type: String,
          default: 'content text',
        },
        isDeploy: {
          type: Boolean,
        },
      },
      methods: {
        onClick: function () {
          this.$emit('click', '');
        },
      },
    };
</script>

<style scoped lang="sass">
  @import "../style/variable"
  @import "../style/global"

  .post-wrap
    box-shadow: 0 1px 8px 0 rgba(0,0,0,0.12), 0 3px 4px 0 rgba(0,0,0,0.12), 0 3px 3px -2px rgba(0,0,0,0.12)
    @include border-radius(3px)
    .post-header
      border-top-left-radius: 3px
      border-top-right-radius: 3px
      height: 48px
      box-shadow: 0 1px 8px 0 rgba(0,0,0,0.08)
      .text
        color: #eeeeee
        text-indent: 18px
        line-height: 48px
        font-size: 18px
    .post
      height: 180px
      padding: 16px
      .title
        .text
          height: 50px
          color: $main-color
          font-size: 24px
          line-height: 60px
        .bar
          width: 50px
          height: 5px
          background-color: #cccccc
          opacity: 0.8
          border-radius: 3px
          margin-left: 8px
      .intro
        margin: 8px
        .text
          color: $main-color
</style>
