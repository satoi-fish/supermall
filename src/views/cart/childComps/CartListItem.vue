<!--  -->
<template>
  <div class="CartListItem">
    <div class="checkButton">
      <CheckButton />
    </div>
    <div class="Cleft image">
      <img :src="product.image" alt="">
    </div>
    <div class="Cright">
      <div class="title">
        <h5>{{product.title}}</h5>
      </div>
      <div class="desc">
        <p>{{product.desc}}</p>
      </div>
      <div class="price-count">
        <div class="price">{{product.price}}</div>
        <div class="count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';

export default {
  name: "CartListItem",
  data() {
    return {};
  },
  components:{
    CheckButton
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  }
};
</script>
<style scoped>
  .CartListItem{
    display: flex;
    width: 100vw;
    margin-top: 5px;
    border-bottom:1px solid rgba(0, 0, 0, .4);
  }
  .checkButton{
    flex:1;
    max-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Cleft{
    margin-right:10px ;
    width: 20%;
  }
  .Cleft img{
    width: 100%;
    border-radius: 9px;
  }
  .Cright{
    display: flex;
    flex-direction: column;
    flex:1;
    align-items: space-between;
    width: 50%;
  }
  .Cright div{
    flex:1;
    line-height: 40px;
  }
  .title h5{
    font-size: 16px;
  }
  .desc p{
    font-size: 13px;
  }
  .title h5,.desc p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .price-count{
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .count{
    position: absolute;
    top: 2%;
    left: 90%;
  }
</style>
