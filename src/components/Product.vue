<template>
  <div class="shop">
    <div class="shop" @click="buy">
        <div class="desc">
            <h4>{{ product.name }}</h4>
            <small>+{{ product.cookiePerSeconds }} cookies/s</small>
            <div class="price">
                <img class="icon" src="../assets/cookie.png" alt="">
                <div :class="{'text-green': canBuy === true, 'text-red': canBuy === false }">{{ product.price }}</div>
            </div>
        </div>
        <div class="count" ref="count">
            <span>{{ product.purchased }}</span>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'product',
  data () {
    return {}
  },
  props: ['product'],
  computed: {

    canBuy: function () {
      return this.$store.state.countTotal >= this.product.price
    }
  },
  mounted () {
    this.$store.dispatch("farmProducts", (this.product.name));
    // if (this.$store.state.cursor >= 1 || this.$store.state.grandma >= 1) {
    //   this.$store.dispatch("farmProducts", (this.product.id));
    // }
  },
  methods: {
    buy () {
      if (this.canBuy) {
          this.$store.commit("BUY_PRODUCT", { productId: this.product.id})
      }
    }
  }
}

</script>

<style>
.shop {
        position: relative;
        font-family: 'Avenir', cursive;
        padding: 20px;
        border-bottom: solid 2px rgba(255, 255, 255, .2);
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        overflow-x: auto;
    }
    .popup {
        position: absolute;
        transform: translateX(-100%);
    }
    .shop:hover {
        background: #444;
    }
    .price {
        padding-top: 10px;
        display: flex;
        align-items: center;
        font-family: 'Quicksand', sans-serif;
    }
    .desc {
        flex: 1;
    }
    .count {
        font-size: 30px;
        opacity: 0.3;
        transition: transform .1s;
    }
    .icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    .text-green {
        color: green;
    }
    .text-red {
        color: red;
    }
    small {
        color: #777;
        font-weight: normal;
        font-size: 12px;
    }
</style>
