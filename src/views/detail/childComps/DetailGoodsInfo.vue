<!--  -->
<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="DetailGoodsInfo">
    <div class="infoDesc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.title}}</div>
      <div class="end"></div>
    </div>
    <div class="infoKey">{{detailInfo.detailImage[0].key}}</div>
    <div class="infoList">
      <img v-lazy="item" alt="" 
      @load="imgLoad" 
      v-for="(item, index) in detailInfo.detailImage[0].list" 
      :key="index">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      counter:0,
      imagesLength:0,
    };
  },
  props:{
    detailInfo:{
        type:Object,
      }
  },
  methods:{
    imgLoad(){
        this.$emit("imageLoad")
    }
  },
  watch:{
    detailInfo(){
      //获取图片的个数，只获取一次或两次
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>
<style scoped>
  .DetailGoodsInfo{
    margin-top: 20px;
  }
  .clear-fix{
    clear:both
  }
  .start,.end{
    width: 85px;
    height: 10px;
    border-bottom: 1px solid #222;
  }
  .end{
    margin-left: 75%;
  }
  .start::before{
    position: relative;
    top: 4px;
  }
  .end::after{
    position: relative;
    top: 5px;
    right: -80px;
  }
  .start::before, .end::after{
    content:'';
    display: block;
    width: 5px;
    height: 5px;
    background-color: #222;
  }
  .desc{
    margin:20px  0;
  }
  .infoDesc{
    margin: 10px 10px 10px 0;
    padding-left:15px;
    display: flex;
    flex-direction: column;
  }
  .infoKey{
    margin: 20px 0px 20px 10px;
    height: 30px;
    padding: 5px 0 0 7px;
    background-color: rgba(218, 218, 218,.5);
    border-radius: 15px 0px 0px 15px;
    font-weight: normal;
    color: rgb(22, 22, 22);
  }
  .infoList{
    width: 100%;
  }
  .infoList img{
    width: 100%;
  }
</style>
