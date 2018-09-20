<template lang="jade">
  .modal-mask(v-show="showModal" v-on:click="close")
    .modal-wrapper(v-on:keyup="close")
      .modal-container(v-on:click.prevent.self="close" v-bind:style="{width:width, height:height}")
        .modal-body
</template>
<script>
  /**
   * modal를 생성
   */
  export default {
    props: {
      width: {
        type: String,
        default: '420px',
      },
      height: {
        type: String,
        default: '680px',
      },
    },
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      open() {
        this.showModal = true;
      },
      close() {
        this.showModal = false;
      },
    },
  };
</script>

<style scoped lang="sass">
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
        background-color: #efefef
        border-radius: 4px
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
        transition: all .3s ease
</style>
