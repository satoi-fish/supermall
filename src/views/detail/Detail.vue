<!--  -->
<template>
  <div class="Detail">
    <DetailNavBar  @titleClick="titleClick" ref="nav"/> 
    <Scroll class="content" ref="Scroll" @scroll="contentScroll" :probetype="3">
        <DetailSwiper :topImages="topImages" class="DetailSwiper"/>
        <DetailBaseInfo :goods="goods"/>
        <DetailShopInfo :shop="shop"/>
        <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"/>
        <DetailParamInfo ref="params" :paramInfo="paramsInfo"/>
        <DetailCommentInfo ref="comment" :commentInfo="commentInfo"/>
        <GoodsList ref="recomment" :goods='recommends'/>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isBackToTop"/>
    <DetailBottomBar @addCart="addCart"/>
  </div>
</template>

<script>
import {getDetail, GoodsInfo, Shop, GoodsParam, getRecommend} from 'network/detail'

import { debounce } from "common/utils"


import Scroll from 'components/common/scroll/scroll'

import {backTopMixin} from 'common/mixin'

import BackTop from "components/content/backTop/BackTop"
import GoodsList from 'components/content/goods/GoodsList'

import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import DetailParamInfo from './childComps/DetailParamInfo'
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
      delayRefresh: 100,
      detailInfo:{},
      paramsInfo:{},
      commentInfo:{},
      recommends:[],
      itemImgListener: function(){},
      refresh:null,
      themeTopYs:[0],
      getThemeTopY:null,

    };
  },
  mixins:[backTopMixin],
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  created(){
    this.iid = this.$route.params.iid
    //根据ID请求数据
    getDetail(this.$route.params.iid).then(res=> {
      // console.log(res)
      //获取顶部图片的数据
      this.topImages = res.result.itemInfo.topImages

      //创建商品信息
      const data = res.result
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      //创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
      //保存商品的详情数据
      this.detailInfo = data.detailInfo
      //获取参数信息
      this.paramsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //取出评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]

      }
    })
    getRecommend().then(res=>{
      this.recommends = res.data.list
    })
    this.getThemeTopY = debounce(()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop -44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop -44)
      this.themeTopYs.push(this.$refs.recomment.$el.offsetTop -44)
      this.themeTopYs.push(Number.MAX_VALUE)
    },500)
  },
  mounted(){
    // 监控轮播图的图片加载完成后刷新滚动插件
    this.refresh = debounce(this.$refs.Scroll.refresh,this.delayRefresh)
    this.$bus.$on('detailItemImageLoad',()=>{
      this.refresh()
    })
  },
  destroyed(){
  },
  methods:{
    contentScroll(position){
      //本身是负值得取反对比
      const positionY = -position.y
      //对比区间,判断条件，首先是是否变化i，然后判断是否在区间，最后是最后一个区间判断
      let length = this.themeTopYs.length
      for(let i = 0;i < length; i++){
        if(this.currentIndex !== i &&
        ((positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[1*i+1] && i < length - 1) )){
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
          // console.log(this.currentIndex)
        }
      }
      //返回顶部
      this.isBackToTop = position.y <= -1000 ? true : false
    },
    imageLoad(){
      this.refresh()
      
      this.getThemeTopY()
    },
    titleClick(index){
      // console.log(index)
      this.$refs.Scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },
    addCart(){
      //获取商品信息
      const product= {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.count = 1
      product.iid = this.iid

      //将商品添加到购物车
      this.$store.dispatch('addCart',product)
    }
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
  height: calc( 100% - 93px );
  }
</style>
