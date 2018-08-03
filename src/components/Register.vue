<template>
	<div class="container" >
      <h1 class="text-center">register</h1>
        <div class="formIn">
            <form action="" method="post" >
            	<div class="reg">
            	    <span>昵 称：</span><input type="text" name="username" class="username" placeholder="请输入您的用户名" autocomplete="on">
            	</div>
                
                <div class="reg">
                	  <span>密 码：</span><input type="password" name="password" class="password" placeholder="请输入您的密码" autocomplete="on">
                </div>
                
                <div class="reg">
                	  <span>生 日：</span><input type="date" name="birthday" class="birthday" placeholder="请输入您的生日" autocomplete="on">
                </div>
                
                 <div class="reg">
                	  <span>性 别：</span>
                	  <select class="sex">
                	    <option class="sex">男</option>
                	    <option class="sex">女</option>
                	  </select>
                </div>
                
                <div class="reg">
                	  <span>手 机：</span><input type="password" name="password" class="password" placeholder="请输入您的手机号码" autocomplete="on">
                </div>
               
               <div class="reg">
               	 <button type="submit" class="btn btn-primary">Login</button>
               	 <button type="reset"  class="btn btn-danger">cancal</button>
               </div>
               
            </form>
        </div>
     </div>
</template>


<script>
	
</script>


<style>
     .reg{
     	margin-top: 3vh;
     	margin-left: 40%;
     }

</style>