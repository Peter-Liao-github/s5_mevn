import Vue from 'vue'
import App from './App.vue'

import 'normalize.css'
import EasySlider from 'vue-easy-slider'
Vue.use(EasySlider)

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

import HomeComponent from './components/HomeComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue'
import CustomizedsComponent from './components/CustomizedsComponent.vue'
import IndexComponent from './components/IndexComponent.vue'
import CreateComponent from './components/CreateComponent.vue'
import EditComponent from './components/EditComponent.vue'
import EditNewsComponent from './components/EditNewsComponent.vue'
import EditProductsComponent from './components/EditProductsComponent.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },
  {
    name: 'products',
    path: '/products',
    component: ProductsComponent
  },
  {
    name: 'customizeds',
    path: '/customizeds',
    component: CustomizedsComponent
  },
  {
    name: 'index',
    path: '/index',
    component: IndexComponent,
    children: [{
      path: 'editnews',
      name: 'edit-news',
      component: EditNewsComponent,
    },{
      path: 'editproducts',
      name: 'edit-products',
      component: EditProductsComponent,
    }]
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent
  },
  {
    name: 'edit',
    path: '/edit',
    component: EditComponent
  },
]

const router = new VueRouter({ mode: 'history', routes})
new Vue(Vue.util.extend({ router }, App)).$mount('#app')

// new Vue({
//   render: h => h(App),
// }).$mount('#app')