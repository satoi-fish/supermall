<!--  -->
<template>
  <div>
    <Swiper class="DetailSwiper" >
      <SwiperItem class="swiperItem" v-for="item in topImages">
        <img :src="item" alt="" @load="imageLoad">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    }
  }
};
</script>
<style scoped>
  .swiperItem{
   height: 300px; 
   text-align: center;
  }
  .swiperItem img{
    height: 100%;
    width: auto;
    margin:0 auto;
  }
</style>
