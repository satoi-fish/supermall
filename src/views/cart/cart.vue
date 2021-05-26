<!--  -->
<template>
  <div class="cart">
    <!-- 导航 -->
    <NavBar class="navBar">
      <div slot="center">购物车({{length}})</div>
    </NavBar>

    <!-- 商品列表 -->
    <CartList />
    <!-- 底部汇总 -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import CartList from './childComps/CartList';

import { mapGetters } from 'vuex';

export default {
  name: "cart",
  data() {
    return {
      
    };
  },
  computed:{
    ...mapGetters({
      length:'cartLength'
    })
  },
  components:{
    NavBar,
    CartList,
  }
};
</script>
<style scoped>
  .cart{
    height: 100vh;
  }
  .navBar{
    background-color: var(--color-tint);
    color:#fff;
  }
</style>
