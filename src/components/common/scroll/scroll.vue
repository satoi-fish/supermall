<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bs from 'better-scroll'

export default {
  name: "Scroll",
  props:{
    probetype:{
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
  },
  mounted(){
    this.scroll = new bs(this.$refs.wrapper,{
      click: true,
      probeType: this.probetype,
      pullUpLoad:this.pullUpLoad
    })
    
    if(this.probetype === 2 || this.probetype === 3){
      this.scroll.on('scroll',(position) =>{
        this.$emit('scroll',position)
      })
    }
    this.pullUpLoad && this.scroll.on('pullingUp',() => {
      this.$emit('pullUpLoad')
    })
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  },
  methods: {
    scrollTo(x, y, time = 300){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll ? this.scroll.Y : 0
    }
  },
  data() {
    return {
      scroll: null
    };
  },
};
</script>
<style scoped>

</style>
