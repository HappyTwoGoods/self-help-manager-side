<template>
  <div id="max">
    <div id="background">
      <img src="../assets/image/manager.jpg"/>
    </div>
    <div id="word">
    <div id="first">欢迎进入系统</div>
    <div id="change">请选择您的身份</div>
    <div id="cook"><span>厨师</span></div>
    <div id="manager"><span>管理员</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Welcome"
  }
</script>

<style scoped>
  #max{
    font-family: 仿宋;
    width: 100%;
    height: 100%;
  }
  #background{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 0;
  }
  img{
    z-index: 0;
    width: 100%;
    height: 100%;
  }
  #word{
    width: 100%;
    position: fixed;
    z-index: 2;
  }
  #first {
    width: 100%;
    font-weight: bolder;
    font-size: 35px;
    color: red;
    margin-top: 50%;
    text-align: center;
  }
  #change{
    text-align: center;
    margin-top: 15%;
    font-size: 25px;
    color: yellow;
  }
  #cook{
    display: inline-block;
    text-align: center;
    color: yellow;
    margin-top: 17%;
    font-size: 20px;
    width: 47%;
  }
  #manager{
    display: inline-block;
    text-align: center;
    color: yellow;
    margin-top: 17%;
    font-size: 20px;
    width: 47%;
  }
  span{
    background-color: rgba(238,0,0,5);
    padding: 2% 5% 2%;
    border-radius: 25px;
  }

</style>
