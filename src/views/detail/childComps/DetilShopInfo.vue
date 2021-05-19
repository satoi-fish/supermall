<!--  -->
<template>
  <div class="DetilShopInfo">
    <div class="shopTop">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shopMiddle">
      <div class="shopMiddleItem shopMiddleLeft">
        <div class="infoSells">
          <div class="sellsCount">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sellsText">总销量</div>
        </div>
        <div class="infoGoods">
          <div class="goodsCount">
            {{ shop.goodsCount }}
          </div>
          <div class="goodsText">全部宝贝</div>
        </div>
      </div>
      <div class="shopMiddleItem shopMiddleRight">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ scoreBetter: item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ betterMore: item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shopBottom">
      <div class="enterShop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetilShopInfo",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
    },
  },
  filters: {
    sellCountFilter: function(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>
<style scoped>
  .DetilShopInfo{
    background-color: #fff;
    padding-bottom: 20px;
    border-bottom: 5px solid #f2f5f8;    
  }
  .shopTop{
    font-weight:400;
    padding: 20px 10px;
  }
  .shopTop img{
    width: 43px;
    border:3px solid rgba(218, 218, 218,.5);
    border-radius: 20px;
  }
  .title{
    margin-left: 16px;
    position: relative;
    bottom: 13px;
  }
  .shopMiddle{
    font-size: 13px;
    display: flex;
  }
  .shopMiddleItem{
    flex:1;
    display: flex;
    justify-content: space-around;
    color:rgb(27, 27, 27)
  }
  .shopMiddleLeft{
    margin:auto 0px;
    border-right: 2px solid rgba(218, 218, 218,.5);
    text-align: center;
  }
  .sellsCount,.goodsCount {
    font-size: 16px;
    padding-bottom: 6px;
  } 
  .sellsText,.goodsText{
    font-size: 12px;
  }
  table{
    border-collapse:separate;
    border-spacing: 10px;
  }
  .scoreBetter{
    color: #f82a6e;
  }
  .betterMore{
    color:#fff;
    background-color: #f82a6e; 
  }
  .shopBottom{
    margin-top: 10px;
    width: 80%;
    background-color: rgba(88, 87, 87,.4);
    display: flex;
    justify-content: center;
    color: #fff;
    position: relative;
    left:10%;
    border-radius: 20px;
    height: 30px;
    align-items: center;
  }
</style>
