import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Mine from '../pages/mine.vue'
import Catelogue from '../pages/catelogue.vue'
import Orders from '../pages/orders.vue'
import Details from '../pages/details'
import Address from '../pages/address'
import NewAddress from '../pages/newAddress'
import MyOrder from "../pages/myOrder"
import MyOrderDetail from "../pages/myOrderDetail"
import Blank from "../pages/blank"

import AllOrders from "../pages/myOrder/allOrders"
import Shipped from "../pages/myOrder/shipped"
import NoPay from "../pages/myOrder/noPay"
import NoSend from "../pages/myOrder/noSend"
import Complete from "../pages/myOrder/complete"

export default new Router({
  //mode:"history",//去除链接中的#
  routes: [
    {path: '/',component:Catelogue,meta:{title:"小电商"}},
    {path: '/mine',component:Mine,name:'Mine',meta:{title:"我的"}},
    {path: '/catelogue',component:Catelogue,name:'Catelogue'},
    {path: '/orders',component:Orders,name:'Orders'},
    {path: '/details',component:Details,name:'Details'},
    {path: '/address',component:Address,name:'Address'},
    {path: '/newAddress',component:NewAddress,name:'NewAddress'},
    {path: '/myOrder',component:MyOrder,name:'MyOrder',
      children:[
        {path:'',component:AllOrders},
        {path:'allOrders',component:AllOrders},
        {path:'shipped',component:Shipped},
        {path:'noPay',component:NoPay},
        {path:'noSend',component:NoSend},
        {path:'complete',component:Complete}
      ]
    },
    {path: '/myOrderDetail',component:MyOrderDetail,name:'MyOrderDetail'},
    {path: '/blank',component:Blank,name:'Blank'}
  ],
});


