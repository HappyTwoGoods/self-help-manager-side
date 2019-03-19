<template>
  <div id="max">
    <div id="background"></div>
    <div id="content">
      <div id="head">
        <div id="back"><span @click="goBack">返回</span></div>
      </div>
      <div id="addCook">增加厨师</div>
      <div id="data">
        厨师姓名:<input type="text" placeholder="请输入姓名" v-model="name"/><br/>
        厨师电话:<input type="text" placeholder="请输入电话" v-model="telephone"/><br/>
        厨师昵称:<input type="text" placeholder="请输入昵称" v-model="nickname"/><br/>
        厨师密码:<input type="text" placeholder="请输入密码" v-model="password"/><br/>
        <button @click="goAddCook">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {service} from "../js/api";

  export default {
    name: "addCook",
    data(){
      return {
        name:null,
        telephone:null,
        nickname:null,
        password:null
      }
    },
    methods:{
      goBack(){
        this.$router.push({path:"/smallCook"})
      },
      goAddCook(){
        service("get","/manager/add/cookInfo",{cookName:this.name,
        telephone: this.telephone,nickname: this.nickname,password:this.password}).then(
          data=>{if(data.code!==200){
            alert(data.message)
            return
          }if(data.code===200){
            alert("增加成功")
            if(confirm("是否继续增加")){
              this.$router.push("/addCook")
            }else {
              this.$router.push("/smallCook")
            }
          }
          }
        )
      }
    }
  }
</script>

<style scoped>
  #max {
    width: 100%;
    height: 100%;
    font-family: 仿宋;
  }

  #background {
    position: fixed;
    z-index: 0;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #FFE4B5, #FFFAFA);
  }

  #content {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
  }
  #head {
    position: fixed;
    background: linear-gradient(45deg, #FF0000, #FFFAFA);
    z-index: 1000;
    height: 60px;
    width: 100%;
  }
  #back{
    width: 15%;
    display: inline-block;
    float: left;
    margin-left: 5%;
    line-height: 60px;
  }
  #back span{
    border-radius:25px;
    padding: 5%;
    background-color: lavender;
  }
  #addCook{
    padding-top:35%;
    width: 100%;
    height: 20%;
    font-size: 35px;
  }
  #data{
    margin:0% 10%;
    width: 80%;
  }
  input{
    width: 100px;
    margin-top: 4%;
    height: 30px;
    background: transparent;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 0.5px black solid;
  }
  input:focus{
    outline: none;
  }
  button{
    margin-top: 10%;
    width: 60px;
    height: 30px;
  }
</style>
