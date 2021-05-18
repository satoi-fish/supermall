<!--  -->
<template>
  <div class="BackTop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
};
</script>
<style scoped>
  .BackTop{
    position: fixed;
    z-index: 99;
    right: 15px;
    bottom: 60px;

  }
  .BackTop img{
    width: 43px;
  }
</style>
