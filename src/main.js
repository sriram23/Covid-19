import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import Router from 'vue-router'
// import NavBar from '@/components/NavBar.vue'
import Global from '@/components/Global.vue'
import India from '@/components/India.vue'
import GlobalTrend from '@/components/GlobalTrend.vue'
import IndiaTrend from '@/components/IndiaTrend.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'navbar',
      component: Global,
    },
    {
      path: '/global',
      name: 'global',
      component: Global,
    },
    {
      path: '/india',
      name: 'india',
      component: India,
    },
    {
      path: '/global-trend',
      name: 'global-trend',
      component: GlobalTrend,
    },
    {
      path: '/india-trend',
      name: 'india-trend',
      component: IndiaTrend,
    },
  ];
const router = new Router({routes});

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')