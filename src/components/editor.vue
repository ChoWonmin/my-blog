<template lang="jade">
  .full-screen.card
    .menu-bar-wraper
      .menu-bar.flex
        .small-menu
          input.post-title-input
        .small-menu.flex
          Button(:icon="'bold'", :option="'small'", :is_awesome="true", :tooltip="'bold'", v-on:click="insertWord('**','**')")
          Button(:icon="'italic'", :option="'small'", :is_awesome="true", :tooltip="'italic'", v-on:click="insertWord('_','_')")
          Button(:icon="'underline'", :option="'small'", :is_awesome="true", :tooltip="'underline'", v-on:click="insertWord()")
          Button(:icon="'plus'", :option="'small'", :is_awesome="true", :tooltip="'bigger'", v-on:click="insertWord('#','')")
          Button(:icon="'minus'", :option="'small'", :is_awesome="true", :tooltip="'smaller'", v-on:click="insertWord('#','')")
        .small-menu.flex
          Button(:icon="'list-ul'", :option="'small'", :is_awesome="true", :tooltip="'list-ul'")
          Button(:icon="'align-left'", :option="'small'", :is_awesome="true", :tooltip="'align-left'")
          Button(:icon="'align-center'", :option="'small'", :is_awesome="true", :tooltip="'align-center'")
          Button(:icon="'align-right'", :option="'small'", :is_awesome="true", :tooltip="'align-right'")
        .small-menu.flex
          Button(:icon="'link'", :option="'small'", :is_awesome="true", :tooltip="'link'")
          Button(:icon="'image'", :option="'small'", :is_awesome="true", :tooltip="'image'", v-on:click="upload")
          Button(:icon="'video'", :option="'small'", :is_awesome="true", :tooltip="'video'", v-on:click="upload")
        .empty
        Button(:icon="'save'", :name="'save'", :is_awesome="true", :tooltip="'save'", v-on:click="save").save-btn
    .editor.flex
      textarea(ref='mdTextarea' v-model="inputContent")
      .rendered(v-html="compiledMarkdown()")
</template>

<script>
  import md from 'markdown';
  import Button from './lib/button';
  import { dataModule, storageModule } from '../js/firebase.wrapper';

  export default {
    components: { Button },
    data() {
      return {
        inputContent: '',
        postList: {},
      };
    },
    methods: {
      compiledMarkdown: function () {
        return md.markdown.toHTML(this.inputContent);
      },
      findCursor(txtarea) {
        const start = txtarea.selectionStart;
        const finish = txtarea.selectionEnd;
        return { start: start, finish: finish };
      },
      insertWord(arg1, arg2) {
        const txtarea = this.$refs.mdTextarea;
        const cursor = this.findCursor(txtarea);
        const text = txtarea.value;
        const sel = text.substring(cursor.start, cursor.finish);
        if (sel === '') {
          txtarea.value = `${text.substring(0, cursor.start)} ${arg1}${text.substring(cursor.start, cursor.finish)}${arg2} ${text.substring(cursor.finish, text.length)}`;
        } else {
          txtarea.value = `${text.substring(0, cursor.start)} ${arg1}${text.substring(cursor.start, cursor.finish)}${arg2} ${text.substring(cursor.finish, text.length)}`;
        }
      },
      bigger() {
        const txtarea = this.$refs.mdTextarea;
        const cursor = this.findCursor(txtarea);
        const text = txtarea.value;
        txtarea.value = `${text.substring(0, cursor.start - 1)}${text.substring(cursor.start, text.length)}`;
      },
      async save() {
        const dataRef = await dataModule.getRef();
        const id = dataRef.child('posts').push().key;
        await dataModule.set(`/posts/${id}/`, { title: 'hello' });
        const storageRef = await storageModule.getRef(`/posts/${id}/`);
        await storageModule.putString(storageRef, this.compiledMarkdown());
      },
      async upload() {
        this.postList = (await storageModule.getRef('posts')).val();
        console.log(this.postList, 'postList');
      },
    },
  };
</script>

<style lang="sass" scoped>
  @import "/style/variable"
  @import "/style/global"
  @import "/style/grid"

  .full-screen
    @include card(0.12, 0)
    @include border-radius(3px)
    .menu-bar-wraper
      background-color: rgba(0, 0, 0, .05)
      padding: 15px
      .menu-bar
        height: 40px
        .small-menu
          margin: 0 10px
          box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
          .post-title-input
            outline: none
            border: solid 0px
            border-radius: 4px
            width: 30vw
            height: 100%
            @include shadow(.12)
          .save-btn
            width: 112px
            float: right
    .editor
      height: 70vh
      textarea
        font-size: 18px
        padding: 16px
        line-height: 1.5
        flex: 1
        height: 100%
        resize: none
        border: 0
        &:focus
          outline: none
      .rendered
        padding: 16px
        flex: 2
        border-left: solid 1px #ccc
        p
          border: solid 10px red
          img
            max-width: 50px
  /*max-height: 600px*/
</style>
