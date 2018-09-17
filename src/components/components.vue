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

    Spinner()
    Spinner(:position="[80, 80]")

</template>

<script>
  import Button from './lib/button';
  import Spinner from './lib/spinner';
  import DropDown from './lib/dropDown';

  export default {
    components: { Button, Spinner, DropDown },
  };
</script>

<style lang="sass">

</style>
