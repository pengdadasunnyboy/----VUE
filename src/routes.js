import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
import Index from './components/home/Index'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'
import Show from './components/home/show/Show'

export const routes=[
   {path:'/home',name:"homeLink",components:{
   	default:Home,
   	'index':Index,
   	'menu':Menu
   	/*'orderingGuide':OrderingGuide,
   	'delivery':Delivery,
   	'history':History*/
   }},
   {path:'/menu',name:"menuLink",component:Menu,children:[
     
   ]},
   {path:'/admin',name:"adminLink",component:Admin
   /*,beforeEnter:(to,from,next)=>{
   	//路由独享守卫
   	alert("非登录状态，不能访问此页面");
   	next(false);
   	//判断store.gettes.isLogin===false
	if(to.path=='/login'||to.path=='/register'){
		next();
	}else{
		alert("还未登录，请先登录。");
		next('/login');
	}
   }*/},
   {path:'/about',name:"aboutLink",component:About,redirect:'/history',children:[
          {path:'/about/contact',name:"contactLink",component:Contact,redirect:'/personname',children:[
          {path:'/phone',name:"phoneNumber",component:Phone},
          {path:'/personname',name:"personName",component:PersonName},
          ]},
          {path:'/history',name:"historyLink",component:History},
          {path:'/delivery',name:"deliveryLink",component:Delivery},
          {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
          
   ]},
   {path:'/login',name:"loginLink",component:Login},
   {path:'/register',name:"registerLink",component:Register},
   {path:'*',redirect:'/'},
   {path:'/show',name:"showLink",component:Show}
]


//全局守卫
/*router.beforeEach((to,from,next)=>{
	//alert("还未登录，请先登录。");
	//next();
	//console.log(to);

	//判断store.gettes.isLogin===false
	if(to.path=='/login'||to.path=='/register'){
		next();
	}else{
		alert("还未登录，请先登录。");
		next('/login');
	}
})*/

//后置钩子
/*router.afterEach((to,from)=>{
	alert("alter each");
})*/