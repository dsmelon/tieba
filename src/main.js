// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import iview from 'iview';
import Swiper from 'vue-awesome-swiper';
import Resource from 'vue-resource';
import 'iview/dist/styles/iview.css';
import FooterBar from '@/components/FooterBar';Vue.component('footer-bar',FooterBar);
import HeaderBar from '@/components/HeaderBar';Vue.component('header-bar',HeaderBar);
import IndexHead from '@/components/IndexHead';Vue.component('index-head',IndexHead);
import Loading from '@/components/Loading';Vue.component('load-mask',Loading);

Vue.use(iview);
Vue.use(Resource);
Vue.use(Vuex);

const store=new Vuex.Store({
	state: {
		loginMark: false,
	},
	getter: {
		abc(){
			return ;
		}
	},
	mutations: {
		login(state,arg) {
			state.loginMark=true;
			console.log(arg);
		},
		logout(state) {
			state.loginMark=false;
		}
	},
	actions: {
		//异步
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})