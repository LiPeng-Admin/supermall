<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot ="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from "network/home.js"
import HomeSwiper from "views/home/childComps/HomeSwiper"
import RecommendView from "views/home/childComps/RecommendView"


export default {
  name: 'VueCodeHome',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  
   
    
  },
  data(){
    return{
    banners:[],
    recommends:[]
    }

  },
  created(){
    getHomeMultidata().then(res=>{
      console.log(res);
      //this.result=res
     this.banners= res.data.banner.list
     this.recommends=res.data.recommend.list

    })

  },


};
</script>

<style  scoped>
  .home-nav {
    background-color: var(--color-tint);
    color:white
  }

</style>