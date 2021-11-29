<template>
  <div class="tab-bar-item" @click="btnClick">

    <div v-if="!isActive"><slot name="item-icon"></slot> </div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot  name="item-text"></slot></div>
   
   
  </div>
 
</template>

<script>
export default {
  name: 'VueCodeTabbaritem',
 props:{
   path:String,
   activeColor:{
     type:String,
     default:"slateblue"
   },
 },
  data(){
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive ?{color:this.activeColor} :{}
    }

  },
  methods: {
    btnClick(){
      this.$router.replace(this.path)
    }
  },
}
</script>

<style  scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  .tab-bar-item {
    width: 100px;
    height: 100px;
    margin-top: 5px;
    vertical-align: middle;
  }
  /* .active {
    color: slateblue;
  } */

</style>