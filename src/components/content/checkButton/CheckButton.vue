<!--  -->
<template>
  <div class="CheckButton">
    <img src="~assets/img/cart/tick.svg" v-show="isChecked" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {};
  },
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
};
</script>
<style scoped>
  .CheckButton{
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid #333;
    border-radius: 20px;
  }
  .CheckButton img{
    border-radius: 20px;
    background-color: var(--color-tint);
    height: 106%;
    width: 106%;
  }
</style>
