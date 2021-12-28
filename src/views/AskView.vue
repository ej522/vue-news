<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
//import bus from '../utils/bus.js'

export default {
  components: {
    ListItem,
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
  mixins: [ListMixin]
  // created() {
  //     bus.$emit('start:spinner');
  //       this.$store.dispatch('FETCH_ASK')
  //         .then(() => {
  //           console.log('fetched');
  //           bus.$emit('end:spinner');
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  // }
}
</script>