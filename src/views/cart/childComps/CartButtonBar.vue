<!--  -->
<template>
  <div class="CartButtonBar">
    <div class="checkArea"  @click="allSClick">
      <CheckButton :isChecked="allChecked" class="checkButton" />
      <span>全选</span>
    </div>
    <div class="price">
      合计{{totalprice}}
    </div>
    <!-- <div>{{checkLength}}</div> -->
    <div class="calculate">
      去结算({{this.cartChoosenLength}})
      {{allChecked}}
    </div>
  </div>
</template>

<script>

import CheckButton from 'components/content/checkButton/CheckButton';

import { mapGetters } from 'vuex';

export default {
  name: "CartButtonBar",
  data() {
    return {
    };
  },
  components:{
    CheckButton,
  },
  computed:{
    ...mapGetters(['cartChoosenLength','cartList']),
    totalprice(){
      // console.log(this.cartList)
      return '￥' + this.cartList.filter(item=>{
        return item.checked
      }).reduce((preV,item)=>{
        return preV + item.price * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.cartChoosenLength
    },
    allChecked(){
      return !this.cartList.some(item=>item.checked===false)
    }
  },
  methods:{
    allSClick(){
      let bool = this.allChecked
      this.cartList.forEach(item =>item.checked = !bool)
    }
  },
};
</script>
<style scoped>
  .CartButtonBar{
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    position: relative;
  }
  .checkArea{
    display: flex;
    align-items: center;
    width: 70px;
  }
  .price{
    margin-left: 20px;
    flex:1;
  }
  .checkButton{
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 5px;
  }
  .calculate{
    width: 90px;

  }
</style>
