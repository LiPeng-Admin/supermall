<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">
        <div>
          首页
      </div>
    </div>
    </tab-bar-item>

    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">
        <div>
          分类
      </div>
    </div>
    </tab-bar-item>

    <tab-bar-item path="/shopcart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text">
        <div>
          购物车
      </div>
    </div>
    </tab-bar-item>

    <tab-bar-item path="/profiles">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">
        <div>
         我的
      </div>
    </div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar"
    import TabBarItem from "components/common/tabbar/TabBarItem"

    export default {
      name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem

    }

      
    };
</script>

<style scoped>

</style>