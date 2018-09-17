<template lang="jade">
  .color-container
    .color-wrap
      .color-box
</template>

<script>
  export default {
    data: function () {
      return {
        colors: {
          alizarin: '#E74C3C',
          orange: '#F39C12',
          sunFlowr: '#F1C40F',
          emerald: '#2ECC71',
          greanSea: '#16A085',
          peterLiver: '#3498DB',
          amethyst: '#9B59B6',
          wetAspalt: '#34495E',
        },
      };
    },
  };
</script>

<style scoped lang="sass">
  @import "../style/variable"

  .color-container
    width: 320px
    height: 200px
    background-color: $basic-white

</style>
