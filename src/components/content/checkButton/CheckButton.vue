<!--  -->
<template>
  <div class="CheckButton">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {};
  },
};
</script>
<style scoped>
  .CheckButton{
    width: 25px;
    height: 25px;
    background-color: var(--color-tint);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .CheckButton img{
    height: 18px;
    width: 18px;
  }
</style>
