<template>
  <div >
    <router-view></router-view>
    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item to="/home" icon="coupon">商城首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="goods-collect">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="vip-card">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style>

</style>
