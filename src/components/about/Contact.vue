<template>
	<div class="card text-dark bg-light ">
		<div class="card-header">联系我们</div>
		<div class="card-body">
			<h3 class="card-title text-center">联系我们</h3>
			<p class="card-text text-center">如果您在用餐过程中遇到问题，可以拨打下面电话联系我们。 </p>
			
			<router-link :to="{name:'personName'}">联系人</router-link>
			<router-link :to="{name:'phoneNumber'}">电话</router-link>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.card-header{
		font-size: 20px;
	}
</style>