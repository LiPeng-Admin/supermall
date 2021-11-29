import Vue from 'vue'
import VueRouter from 'vue-router'


const Home=()=>import("views/home/Home")
const Category=()=>import("views/category/Category")
const Shopcart=()=>import("views/shopcart/Shopcart")
const Profile=()=>import("views/profiles/Profile")

//1:安装插件
Vue.use(VueRouter)

//2:创建路由对象
const routes=[
 {
  path: "",
  redirect: "/home"

 },
 {
   path:"/home",
   component:Home
 },
 {
   path:"/category",
   component:Category
 },
 {
   path:"/profiles",
   component:Profile
 },
 {
   path:"/shopcart",
   component:Shopcart
 }


]
const router=new VueRouter({
  routes,
  mode:"history",
})
//导出router

export default router


