<template lang="jade">
  .spinner(v-bind:style="{left:position[0]+'%', top:position[1]+'%'}")
</template>

<script>
  export default {
    props: {
      position: {
        type: Array,
        default: function () {
          return [50, 50];
        },
      },
    },
  };
</script>

<style lang="sass">
  .spinner
    position: absolute
    width: 60px
    height: 60px
    margin-top: -30px
    margin-left: -30px
    border-radius: 50%
    border: 3px solid lavender
    border-top: solid coral
    animation: spinner 0.7s linear infinite

  @keyframes spinner
    to
      transform: rotate(360deg)
</style>
