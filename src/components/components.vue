<template lang="jade">
  .main
    .card.flex
      Button(:icon="'code'", :name="'mat code'")
      Button(:icon="'user'", :name="'awe user'", :is_awesome="true")
      Button(:icon="'code'")
      Button(:name="'only name'", :tooltip="'add'")
      Button(:icon="'add'", :option="'small'")
      Button(:icon="'add'", :option="'circle'", :tooltip="'add'")
      Button(:icon="'add'", :option="'circle'", :tooltip="'add'")
      Button(:name="'fixed'", :option="'fixed'", :position="[800,300]")

    Spinner(:option="'tri'", :position="[200, 400]")
    Spinner(:position="[10, 80]")

    .card.flex
      DropDown(:title="{name:'java', icon:'java'}", :options="['spring', 'test']")
      Pallette()

    Button(:name="'show'", :option="'small'", :position="[300,300]", v-on:click="onLoginButtonClick")
    Modal(ref="Modal")
</template>

<script>
  import Button from './lib/button';
  import Spinner from './lib/spinner';
  import DropDown from './lib/dropDown';
  import Modal from './lib/modal';
  import Pallette from './lib/pallette';

  export default {
    components: { Button, Spinner, DropDown, Modal, Pallette },
    methods: {
      onLoginButtonClick() {
        console.log('onLoginButtonClick');
        this.$refs.Modal.open();
      },
      showModal() {
        console.log('show modal');
        return true;
      },
    },
  };
</script>

<style lang="sass">

</style>
