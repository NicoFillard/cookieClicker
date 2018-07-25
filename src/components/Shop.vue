<template>
  <div class="shop">
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'shop',
  data () {
    return {}
  },
  props: ['products'],
  computed: {
    // state from the store
    ...mapGetters({
      count: 'count'
    })
  },
  methods: {

  }
}

</script>

<style>

</style>
