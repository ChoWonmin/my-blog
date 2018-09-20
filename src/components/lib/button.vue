<template>
  <div class="button-wrap" v-bind:class="[option,{disabled:disabled}]" v-on:mouseover="onMouseOver" v-on:mouseout="outMouseOut" v-on:click="onClick" v-bind:style="{left:position[0]+'px', top:position[1]+'px'}">
    <div class="btn">
      <div class="content-wrap">
        <div class="icon" v-show="!icon==''">
          <div class="m-icon material-icons" v-show="!is_awesome">
            {{icon}}
          </div>
          <div class="w-icon">
            <i class="fas" v-if="is_awesome" v-bind:class="'fa-'+icon" v-show="is_awesome"></i>
          </div>
        </div>
        <div class="name" v-if="name !== ''" v-bind:class="{only : icon === ''}">
          {{name}}
        </div>
      </div>
    </div>
    <div class="tooltip" v-bind:class="{visible:tooltip_visible && tooltip!==''}">
      <div class="text">{{tooltip}} </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      is_awesome: {
        type: Boolean,
      },
      option: {
        type: String,
        default: 'normal',
      },
      position: {
        type: Array,
        default: function () {
          return [0, 0];
        },
      },
      tooltip: {
        type: String,
        default: '',
      },
      bgColor: {
        type: String,
        default: '',
      },
    },
    data: function () {
      return {
        tooltip_visible: false,
        disabled: false,
      };
    },
    methods: {
      onClick: function () {
        if (this.disabled) {
          console.log('disabled');
        } else {
          this.$emit('click', '');
        }
      },
      onMouseOver: function () {
        this.tooltip_visible = true;
      },
      outMouseOut: function () {
        this.tooltip_visible = false;
      },
    },
  };
</script>

<style lang="sass" scoped>
  @import "../style/global"
  @import "../style/variable"

  $button-height: 40px
  .button-wrap
    position: relative
    display: flex
    background-color: $main-color
    &:hover
      background-color: lighten($main-color, 10)
    &:active
      background-color: darken($main-color, 10)
    &.small
      width: 40px
      height: 40px
    &.fixed
      position: fixed
      top: 30px
    &.circle
      border-radius: 100%

    .btn
      height: $button-height
      width: auto
      color: $basic-white
      .content-wrap
        display: flex
        line-height: $button-height
        .icon
          width: 40px
          text-align: center
          line-height: 40px
          .m-icon, .w-icon
            width: 100%
            line-height: inherit
            text-align: center
        .name
          padding-right: 12px
          flex: 1
          &.only
            padding-left: 12px
    .tooltip
      width: max-content
      background-color: $basic-black
      color: $basic-white
      padding: 0 4px
      height: 26px
      border-radius: 4px
      opacity: 0.95
      display: none
      position: absolute
      top: $button-height + 5
      z-index: 1
      &.visible
        display: block
      .text
        text-align: center
        line-height: 26px

  $disabled-color: $basic-white
  $disabled-background: lighten($main-color,30)

  .btn-wrap.disabled
    .btn
      color: $disabled-color
      background: $disabled-background
      &:hover
        background: $disabled-background
      &:active
        background: $disabled-background
    .tooltip
      &.visible
        display: none
</style>
