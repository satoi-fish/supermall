
import BackTop from "components/content/backTop/BackTop";

export const backTopMixin ={
  data(){
    return {
      isBackToTop:false,
    }
  },
  components:{
    BackTop,
  },
  methods:{
    backClick() {
      this.$refs.Scroll.scrollTo(0, 0, 1000);
    },
  }
  // mounted(){
  //   const refresh = debounce(this.$refs.Scroll.refresh,this.delayRefresh)
  //   this.$bus.$on('itemImageLoad',this.itemImgListener)
  //   this.itemImgListener =  ()=>{
  //     refresh()
  //   }
  // }

}
