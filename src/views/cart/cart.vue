<!--  -->
<template>
  <div class="">
    <h2>购物车</h2>
    <div v-for="item in this.$store.state.cartList">{{item.title}}
      <div>{{item.count}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {};
  },
};
</script>
<style scoped>
  div{
    word-wrap: break-word;
  }
</style>
