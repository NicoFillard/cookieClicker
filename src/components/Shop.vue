<template>
  <div class="product-list">
    <product v-for="product in products" :product="product" :key="product.name" />
  </div>
</template>

<script>
import Product from '@/components/Product'
import { mapGetters } from "vuex";

export default {
  name: 'shop',
  data () {
    return {}
  },
  components: {
    Product
  },
  computed: {
    products: function () {
        return this.$store ? this.$store.state.products.products : null
    }
  },
  methods: {

  }
}

</script>

<style>
.store-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: #222;
  color: white;
  width: 300px;
  }
</style>
