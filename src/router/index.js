import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Jinba from '@/components/Jinba'
import Shipin from '@/components/Shipin'
import Xiaoxi from '@/components/Xiaoxi'
import Wode from '@/components/Wode'
import Tj from '@/components/index/Tj'
import Zb from '@/components/index/Zb'
import Wdds from '@/components/index/Wdds'
import Ft from '@/components/index/Ft'
import Tcrb from '@/components/index/Tcrb'
import Lmjx from '@/components/index/Lmjx'
import Mrjx from '@/components/index/Mrjx'
import Login from '@/components/Login'
import DetailTj from '@/components/DetailTj'
import Testmongodb from '@/components/testmongodb'

Vue.use(Router)


export default new Router({
	routes: [{
		path: '/index',
		component: Index,
		children: [{
	        path: 'tj',
	        component: Tj
	    },{
	        path: 'zb',
	        component: Zb
	    },{
          path: 'wdds',
          component: Wdds
        },{
          path: 'ft',
          component: Ft
        },{
          path: 'tcrb',
          component: Tcrb
        },{
          path: 'lmjx',
          component: Lmjx
        },{
          path: 'mrjx',
          component: Mrjx
        }]
	},{
		path: '/jinba',
		component: Jinba
	},{
		path: '/shipin',
		component: Shipin
	},{
		path: '/xiaoxi',
		component: Xiaoxi
	},{
		path: '/wode',
		component: Wode
	},{
		path: '/login',
		component: Login
	},{
		path: '/detailtj',
		component: DetailTj
	},{
		path: '/testmongodb',
		component: Testmongodb
	}]
})
