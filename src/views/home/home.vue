<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        购物车
      </div>
    </nav-bar>
    <TabControl
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isTabFixed"
        />
    <Scroll
      class="content"
      ref="Scroll"
      :probetype="probetypeInBackToTop"
      @scroll="contentScroll"
      :pull-up-load="isPullUpLoad"
      @pullUpLoad="pullUpLoad">
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <RecommendView :recommends="recommends" />
      <FeatureView />
      <TabControl
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
        />
      <GoodsList :goods="showGoods" />
    </Scroll>
    <BackTop @click.native="backClick" v-show="isBackToTop" />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/scroll";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods, } from "network/home";

import { debounce } from "common/utils";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      probetypeInBackToTop: 2,//want BackToTop turn on just set this to 2 or 3
      banners: null,
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isPullUpLoad: true,
      isBackToTop: false,
      delayRefresh: 0,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    
  },
  mounted(){
    const refresh = debounce(this.$refs.Scroll.refresh,this.delayRefresh)
    
    this.$bus.$on('itemImageLoad',()=>{
          refresh()
    })
  },
  destroyed(){
    console.log('sss')
  },
  activated(){
    this.$refs.Scroll.scrollTo(0, this.saveY , 1000000)
    this.$refs.Scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.Scroll.getScrollY()
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 网络请求方法
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res)
        // this.result = res
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 事件监听相关的方法
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    pullUpLoad(){
      this.getHomeGoods(this.currentType)
      this.$refs.Scroll.finishPullUp()
    },
    contentScroll(position){

        this.isBackToTop = position.y <= -1000 ? true : false
      
        this.isTabFixed = position.y < -this.tabOffsetTop ? true : false
    },
    backClick() {
      this.$refs.Scroll.scrollTo(0, 0, 1000);
    },
    tabClick(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentType = Object.keys(this.goods)[index];
          break;
        case 1:
          this.currentType = Object.keys(this.goods)[index];
          break;
        case 2:
          this.currentType = Object.keys(this.goods)[index];
        default:
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },
  },
};
</script>
<style scoped>
#home {
  /* padding: 44px 0 0 0; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  width: 100%;
/* 
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9; */
}
.content {
  /* 
    方案一
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 51px; */

  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control{
  position:relative;
  z-index: 9;
}

</style>
