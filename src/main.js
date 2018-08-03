import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)

const router=new VueRouter({
	routes,
	mode:'history',
	scrollBehaivor(to,from,savedPosition){
		//return {x:0,y:100}
		if(savedPosition){
			return savedPosition
		}else{
			return{x:0,y:0}
		}
	}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
