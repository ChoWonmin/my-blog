<template lang="jade">
  .color-container(v-show="showPallette" v-on:click="close")
    .color-wrap
      .color-box(v-for="color in colors")
        .color(v-bind:style="{backgroundColor:color}" v-on:click="getColor")
</template>

<script>
  export default {
    data: function () {
      return {
        colors: [
          '#E74C3C',
          '#F39C12',
          '#F1C40F',
          '#2ECC71',
          '#16A085',
          '#3498DB',
          '#9B59B6',
          '#34495E',
        ],
        showPallette: false,
      };
    },
    methods: {
      open() {
        this.showModal = true;
      },
      close() {
        this.showModal = false;
      },
      getColor() {
        this.close();
        console.log('');
      },
    },
  };
</script>

<style scoped lang="sass">
  @import "../style/variable"
  @import "../style/global"

  .color-container
    width: 256px
    height: 128px
    background-color: $basic-white
    border-radius: 4px
    @include shadow(.12)
    .color-wrap
      margin: auto
      .color-box
        @include inline-block
        margin: 8px
        .color
          width: 48px
          height: 48px
          border-radius: 100%
          @include shadow(.12)
</style>
