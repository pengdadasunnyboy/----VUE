<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h2>欢迎大家,来到点餐系统</h2>
				<h4>这里有美味的食品等着大家</h4>
				<btn @click="goToMenu" class="btn btn-success">Let's order!</btn>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		methods:{
			goToMenu(){
				//跳转到上一次浏览的页面
				//this.$router.go(-1)
				
				
				//指定跳转地址
				//this.$router.replace('/menu')
				
				//指定跳转路由的名字下
				//this.$router.replace({name:'menuLink'})
				
				//通过push进行跳转
				//this.$router.push('/menu')
				this.$router.push({name:'menuLink'})
			}
		}
		
	}
	
</script>


<style>
	#home{
		background:url(../assets/img/3.jpg);
		height:75vh;
		padding:14%;
	}
	
	h2,h4{
		margin:6%;
	}
	.background{
		background: #eee;
		opacity: 0.8;
		max-width: 70vw;
		margin:0 auto;
		padding:20px;
	}
</style>