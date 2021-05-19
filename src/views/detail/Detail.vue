<!--  -->
<template>
  <div class="Detail">
    <DetailNavBar /> 
    <Scroll class="content" ref="Scroll" >
        <DetailSwiper :topImages="topImages" class="DetailSwiper"/>
        <DetailBaseInfo :goods="goods"/>
        <DetailShopInfo :shop="shop"/>
        <DetailGoodsInfo :detailInfo="detailInfo"/>
    </Scroll>
  </div>
</template>

<script>
import {getDetail, GoodsInfo, Shop} from 'network/detail'

import Scroll from 'components/common/scroll/scroll'

import { debounce } from "common/utils";

import DetailGoodsInfo from "./childComps//DetailGoodsInfo"
import DetailSwiper from './childComps/DetailSwiper'
import DetailNavBar from "./childComps/DetailNavBar"
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetilShopInfo'
export default {
  name: "Detail",
  data() {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shop:{},
      delayRefresh: 300,
      detailInfo:{},
    };
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
  },
  created(){
    this.iid = this.$route.params.iid
    //根据ID请求数据
    getDetail(this.$route.params.iid).then(res=> {
      console.log(res)
      //获取顶部图片的数据
      this.topImages = res.result.itemInfo.topImages

      //创建商品信息
      const data = res.result
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      //创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
      //保存商品的详情数据
      this.detailInfo = data.detailInfo
    })
  },
  mounted(){
    //监控轮播图的图片加载完成后刷新滚动插件
    const refresh = debounce(this.$refs.Scroll.refresh,this.delayRefresh)
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
  }
};
</script>
<style scoped>
  .Detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .content{
  height: calc( 100% - 44px );
  }
</style>
