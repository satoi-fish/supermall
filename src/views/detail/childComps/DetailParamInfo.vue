<!--  -->
<template>
  <div class="DetailParamInfo" v-if="Object.keys(paramInfo).length !== 0">
    <table class="infoSize" 
      :key="index" 
      v-for="(table,index) in paramInfo.sizes">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="infoParam">
      <tr v-for="(info,index) in paramInfo.infos">
        <td class="infoParamKey">{{info.key}}</td>
        <td class="paramValue">{{info.value}}</td>
      </tr>
    </table>
    <div class="infoImg" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props:{
    paramInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
  .DetailParamInfo {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .DetailParamInfo table {
    width: 100%;
    border-collapse: collapse;
  }
  .DetailParamInfo table tr {
    height: 42px;
  }
  .DetailParamInfo table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .infoParamKey {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .infoParam {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .paramValue {
    color: #eb4868
  }
  .infoImg img {
    width: 100%;
  }
</style>
