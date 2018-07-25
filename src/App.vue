<template>
  <div id="app">
    <Counter count=0 />
    <Shop></Shop>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Shop from "./components/Shop.vue";

export default {
  name: "app",
  components: {
    Counter,
    Shop
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
