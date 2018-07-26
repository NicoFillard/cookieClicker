<template>
  <div>
    <span class="count">{{count}}</span>
    <!-- <button @click="increment">Increment</button> -->
    <div class="content">
        <div class="cookie-wrapper">
            <img ref="cookie" class="cookie" @click="increment" src="../assets/cookie.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'counter',
  data () {
    return {

    }
  },
  computed: {
    // count from the store
    ...mapGetters({
      count: 'count'
    }),
    // products from the store
    products: function () {
        return this.$store ? this.$store.state.products.products : null
    },

  },
  methods: {
    // action from the store
    increment () {
      // this.count++
      this.$store.dispatch("incrementCount", (this.count + 1));
    }
  }
}
</script>
<style media="screen">
.content {
    flex: 1;
    align-items: center;
    text-align: center;
    justify-content: center;
}

.cookie-wrapper {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cookie {
    width: 20%;
    height: 20%;
    cursor: pointer;
    transition: all .5s;
}
</style>
