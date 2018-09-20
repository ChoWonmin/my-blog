<template lang="jade">
  .dropDown
    .parent(v-on:click="onClick")
      .icon
        i.fas(v-bind:class="'fa-'+title.icon") {{title.icon}}
      .parent-text {{title.name}}
    .child-list(v-show="visible")
      .child(v-for="option in optionIcons")
        .child-icon.material-icons {{optionIcons['icon']}}
        .child-text {{optionIcons['icon']}}
</template>

<script>
  export default {
    props: {
      title: {
        type: Object,
        required: true,
      },
      titleIcon: {
        type: String,
        default: '',
      },
      options: {
        type: Array,
        default: [],
      },
      optionIcons: {
        type: Array,
        default: function () {
          return [{
            icon: 'java',
            name: 'java',
          }];
        },
      },
    },
    data: function () {
      return {
        visible: false,
      };
    },
    mounted() {
      console.log(this.options);
    },
    methods: {
      onClick: function () {
        this.visible = !this.visible;
      },
    },
  };
</script>
<style lang="sass" scoped>
  @import "../style/global"
  @import "../style/variable"

  .dropDown
    width: 240px
    @include media-phone
      width: 50px
    .parent
      height: 36px
      background-color: $main-color
      @include hover-background(lighten($main-color, 10))
      .icon
        width: 40px
        text-align: center
        line-height: 40px
        .w-icon
          width: 100%
          line-height: inherit
          text-align: center
      .parent-text
        padding-left: 10px
        color: $basic-white
        line-height: 36px
        @include inline-block
        @include media-phone
          overflow: hidden
          position: absolute

    .child-list
      .child
        @include hover-background($main-color)
        .child-icon
          font-size: 18px
          color: $basic-white
          padding-left: 10px
          @include text-center(36px)
          @include inline-block
        .child-text
          padding-left: 10px
          color: $basic-white
          line-height: 36px
          @include inline-block
</style>
