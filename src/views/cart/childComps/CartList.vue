<!--  -->
<template>
  <div class="CartList">
    <Scroll class="content" ref="scroll">
      <CartListItem 
          v-for="(item,index) in list" 
          :key="index" 
          :product="item" />
          <!-- :number="index" -->
    </Scroll>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

import CartListItem from './CartListItem';

import Scroll from 'components/common/scroll/scroll'

export default {
  name: "CartList",
  data() {
    return {};
  },
  components:{
    Scroll,
    CartListItem,
  },
  computed:{
    ...mapGetters({
      list:'cartList'
    })
  },
  activated(){
    console.log(this.list)
    this.$refs.scroll.refresh()
  },
};
</script>
<style scoped>
  .CartList{
    height: calc(100% - 44px - 49px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
