<template>
	<div class="container" @click="goToDetail">
		<div class="row">
			<div class="col-4">
				<div class="img">
					<img src="../assets/img/1.jpg"/>
				</div>
				<div class="intro">
					<span>奶油披萨</span>
					<span>价格:￥125</span>
				</div>
			</div>
			<div class="col-4">
				<div class="img">
					<img src="../assets/img/2.jpg"/>
				</div>
				<div class="intro">
					<span>水果披萨</span>
					<span>价格:￥88</span>
				</div>
			</div>
			<div class="col-4">
				<div class="img">
					<img src="../assets/img/3.jpg"/>
				</div>
				<div class="intro">
					<span>牛肉披萨</span>
					<span>价格:￥199</span>
				</div>
			</div>
			
			
			<div class="col-4">
				<div class="img">
					<img src="../assets/img/4.jpg"/>
				</div>
				<div class="intro">
					<span>奶油披萨</span>
					<span>价格:￥66</span>
				</div>
			</div>
			<div class="col-4">
				<div class="img">
					<img src="../assets/img/5.jpg"/>
				</div>
				<div class="intro">
					<span>水果披萨</span>
					<span>价格:￥99</span>
				</div>
			</div>
			<div class="col-4">
				<div class="img">
					<img src="../assets/img/6.jpg"/>
				</div>
				<div class="intro">
					<span>牛肉披萨</span>
					<span>价格:￥88</span>
				</div>
			</div>
			
			<div class="col-4">
				<div class="img">
					<img src="../assets/img/7.jpg"/>
				</div>
				<div class="intro">
					<span>奶油披萨</span>
					<span>价格:￥125</span>
				</div>
			</div>
			<div class="col-4">
				<div class="img">
					<img src="../assets/img/8.jpg"/>
				</div>
				<div class="intro">
					<span>水果披萨</span>
					<span>价格:￥88</span>
				</div>
			</div>
			<div class="col-4">
				<div class="img">
					<img src="../assets/img/9.jpg"/>
				</div>
				<div class="intro">
					<span>牛肉披萨</span>
					<span>价格:￥199</span>
				</div>
			</div>
			
			<div class="footer">
				<nav aria-label="Page navigation">
				  <ul class="pagination">
				    <li>
				      <a href="#" aria-label="Previous">
				        <span aria-hidden="true">&laquo;</span>
				      </a>
				    </li>
				    <li><a href="#">1</a></li>
				    <li><a href="#">2</a></li>
				    <li><a href="#">3</a></li>
				    <li><a href="#">4</a></li>
				    <li><a href="#">5</a></li>
				    <li>
				      <a href="#" aria-label="Next">
				        <span aria-hidden="true">&raquo;</span>
				      </a>
				    </li>
				  </ul>
				</nav>
			</div>

			<router-view></router-view>
		</div>
	</div>

</template>

<script>
	export default{
		methods:{
			goToDetail(){
				//跳转到上一次浏览的页面
				//this.$router.go(-1)
				
				
				//指定跳转地址
				//this.$router.replace('/menu')
				
				//指定跳转路由的名字下
				//this.$router.replace({name:'menuLink'})
				
				//通过push进行跳转
				//this.$router.push('/menu')
				this.$router.push({name:'showLink'})
			}
		}
		
	}
	
</script>

<style>
	.img{
		margin: 0 auto;
		text-align: center;
	}
	img{
		margin-top: 10px;
		width:40vh;
		height: 15vw;
	}
	.intro span{
		display: block;
		text-align: center;
	}
	.intro{
		margin-top: 5px;
	}
	.footer nav li a{
		color:black;
		font-size: 16px;
	}
	.footer{
		margin: 0 auto;
	}
</style>