<template lang="jade">
  .full
</template>

<script>
    import { dataModule } from '../js/firebase.wrapper';

    export default {
      data() {
        return {
          userList: {},
        };
      },
      async mounted() {
        this.userList = (await dataModule.get('/user/')).val();
        console.log(this.userList);
      },
    };
</script>

<style lang="sass" scoped>

</style>
