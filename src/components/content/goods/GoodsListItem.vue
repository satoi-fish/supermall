<!--  -->
<template>
  <div class="goodsListItem" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {};
  },
  methods:{
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    },
    imageLoad(){
      if(this.$route.path.indexOf('/home') !== -1){
        this.$bus.$emit('homeItemImageLoad')
      }else if(this.$route.path.indexOf('/detail') !== -1){
        this.$bus.$emit('detailItemImageLoad')
      }
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
};
</script>
<style scoped>
  .goodsListItem{
    position: relative;
    padding-bottom: 40px;
    width: 48%;
  }
  .goodsListItem img{
    width: 100%;
    border-radius: 5px;
  }
  .goodsInfo{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goodsInfo p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom:3px;
  }
  .goodsInfo .price{
    color:var(--color-high-text);
    margin-right: 20px;
  }
  .goodsInfo .collect{
    position: relative;
  }
  .goodsInfo .collect::before {
    content:'';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
