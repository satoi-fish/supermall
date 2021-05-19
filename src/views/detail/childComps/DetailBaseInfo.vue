<!--  -->
<template>

    <div class="DetailBaseInfo" 
    v-if="Object.keys(goods).length !== 0">
      <div class="infoTitle">{{goods.title}}</div>
      <div class="infoPrice">
        <span class="n-price">{{goods.newPrice}}</span>
        <span class="o-price">{{goods.oldPrice}}</span>
        <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
      </div>
      <div class="infoOther">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="infoServices">
        <span class="infoServiceItem" 
          v-for="index in goods.services.length-1" 
          :key="index">
          <img :src="goods.services[index - 1].icon" alt="">
          <span>{{goods.services[index-1].name}}</span>
        </span>
      </div>
    </div>

</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
};
</script>
<style scoped>
  .DetailBaseInfo{
    margin-top: 15px;
    padding: 0 8px;
    color:#999;
    border-bottom: 5px solid #f2f5f8;
  }
  .infoTitle{
    color:#222;
    width: 100%;
    font-weight:500 ;
  }
  .infoPrice{
    margin-top: 10px;
  }
  .infoPrice .n-price{
    font-size: 24px;
    color:var(--color-high-text)
  }
  .infoPrice .o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount{
    font-size: 10px;
    background-color:#f82a6e;
    padding:1px 3px;
    border-radius: 8px;
    color:#fff;
    position: relative;
    bottom:8px;
  }
  .infoOther{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    border-bottom:2px solid rgba(199, 199, 199, 0.3) ;
    padding-bottom: 10px;
  }
  .infoServices{
    display: flex;
    justify-content: space-around;
    color:#222;
    margin: 20px 0;
    font-size: 13px;
    /* border-top: 2px solid rgba(199, 199, 199, 0.3); */
  }
  .infoServices img{
    width: 9px;
  }
</style>
