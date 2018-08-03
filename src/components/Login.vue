<template>
	<div class="container" >
      <h1 class="text-center">register</h1>
        <div class="formIn">
            <form action="" method="post" >
            	<div class="reg">
            	    <input type="text" name="username" class="username" placeholder="请输入您的昵称" autocomplete="on">
            	</div>
                
                <div class="reg">
                	<input type="password" name="password" class="password" placeholder="请输入您的密码" autocomplete="on">
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
	.reg input{
		width:15vw;
	}
     .reg{
     	margin-top: 3vh;
     	margin-left: 42%;
     }

</style>