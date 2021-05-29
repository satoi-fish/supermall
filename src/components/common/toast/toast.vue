<!--  -->
<template>
  <div class="toast" v-show="DisShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message:'',
      DisShow:false,
    };
  },
  methods:{
    show(message, duration = 1500){
      this.DisShow = true
      this.message = message
      // console.log(this)

      setTimeout(() => {
        this.DisShow = false
        this.message = ''
        // console.log(this)
      }, duration);
    }
  }
};
</script>
<style scoped>
  .toast{
    position: fixed;
    top:50%;
    left: 50%;
    transform:translate(-50%,-50%);
    background-color: rgba(0, 0, 0, .65);
    padding:6px 10px;
    border-radius: 15px;
    color:#fff;
    z-index: 999;
  }
</style>
