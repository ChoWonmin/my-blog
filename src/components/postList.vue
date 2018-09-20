<template lang="jade">
  .full-screen
    .post-header
      .post-title
        .title-text
      .flex-item

    .post-wrap.grid
      .cell-3
        Post-box(:title="'Webtoon color'",:text="'웹툰의 색채를 Kobayashi image scale에 따라 감정어휘 지도로 시각화'" v-on:click="open")
      .cell-3
        Post-box(:title="'Yori-Jori'",:text="'사용자의 음성을 인식해서 명령에 따라 다음 요리 순서 혹은 이전 요리 순서 등 알려주는 웹 서비스'" v-on:click="open")
      .cell-3
        Post-box(:title="'three.js tutorial'", :text="'media art(fractal), geometry buffer만을 사용해서 3차원 그래픽 구현'" v-on:click="open")
      .cell-3
        Post-box(:title="'World Cup tactics'", :text="'월드컵에서 국가별로 전술의 특징을 parallel coordinate로 시각화'" v-on:click="open")
      .cell-3
        Post-box(:bgColor="'#E74C3C'",:category="'PHP'", :title="'media industry Link'",:text="'미디어 학과 학생들이 진로를 찾기 수월하도록 교과과정표, 학부생과 졸업생과의 커뮤니티 등을 서비스'" v-on:click="open")
      .cell-3
        Post-box(:bgColor="'#2ECC71'",:category="'Spring'", :title="'IndieStream'",:text="'음악을 통한 SNS'" v-on:click="open")
      .cell-3
        Post-box(:title="'PurePoll'", :text="'The aim of the project is to create an clear poll using blockchain.'" v-on:click="open")
      .cell-3
        Post-box(:title="'Genealogy of thesis'", :text="'Visualization of the genealogy of an thesis'" v-on:click="open")

    .write-modal.modal-mask(v-show="showModal", v-on:click="close")
      .modal-wrapper(v-on:keyup.esc="close")
        .modal-container(v-on:click.stop="")
          .modal-body
            .content
              img(v-bind:src="'/static/img/three02.png'").content-img
              img(v-bind:src="'/static/img/three01.png'").content-img
              img(v-bind:src="'/static/img/three03.png'").content-img
          .modal-footer


</template>

<script>
  import Vue from 'vue';
  import { dataModule } from '../js/firebase.wrapper';
  import PostBox from './lib/postBox';
  import Button from './lib/button';

  export default {
    components: { PostBox, Button },
    data() {
      return {
        userList: {},
        showModal: false,
      };
    },
    async mounted() {
      this.userList = (await dataModule.get('/user/')).val();
      dataModule.addOnChange('/post', (data) => {
        Vue.set(this.userList, data.key, data.val());
      });
    },
    methods: {
      showWriteModal() {
        this.$router.push('/editor');
      },
      open() {
        console.log('oepn');
        this.showModal = true;
      },
      close() {
        this.showModal = false;
      },
      write() {
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
