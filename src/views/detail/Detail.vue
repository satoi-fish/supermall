<!--  -->
<template>
  <div class="Detail">
    <DetailNavBar /> 
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
export default {
  name: "Detail",
  created(){
    this.iid = this.$route.params.iid
  },
  data() {
    return {
      iid:null,
    };
  },
  components:{
    DetailNavBar,
  }
};
</script>
<style scoped></style>
