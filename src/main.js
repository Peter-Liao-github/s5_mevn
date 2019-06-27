import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

Vue.config.productionTip = false

import HomeComponent from './components/HomeComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue'
import CustomizedsComponent from './components/CustomizedsComponent.vue'
import CreateComponent from './components/CreateComponent.vue'
import EditComponent from './components/EditComponent.vue'

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

const router = new VueRouter({ mode: 'history', routes: routes})
new Vue(Vue.util.extend({ router }, App)).$mount('#app')

// new Vue({
//   render: h => h(App),
// }).$mount('#app')