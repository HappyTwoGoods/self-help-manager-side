<template>
  <div id="max">
    <div id="background">
    </div>
    <div id="content">
      <div id="logo">
        <img src="../assets/image/logo.jpg"/>
      </div>
      <div id="input">
        <input id="username" type="text" placeholder="请输入用户名"/>
        <input id="password" type="password" placeholder="请输入密码"/>
      </div>
      <div class="login"><span @click="getLogin(1)">厨师登录</span></div>
      <div class="login"><span @click="getLogin(2)">管理员登录</span></div>
    </div>
  </div>
</template>

<script>
  import {service} from "../js/api.js"
  import $ from 'jquery'

  export default {
    name: "Login",
    methods: {
      getLogin(num) {
        let url;
        let successUrl;
        if (num === 1) {
          url = "/cook/login";
          successUrl = "/cook"
        }
        if (num === 2) {
          url = "/manager/login"
          successUrl = "/manager"
        }
        service("post", url, {
          username: $("#username").val(), password: $("#password").val()
        }).then(data => {
          if (data === undefined || data.code != 200) {
            alert("登录失败，请重新登录！");
            return;
          } else {
            window.location.href = successUrl
          }
        })
      }
    }
  }
</script>

<style scoped>
  #max {
    font-family: 仿宋;
    font-weight: bolder;
    width: 100%;
    height: 100%;
  }

  #background {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    background: linear-gradient(45deg, #FFE4B5, #FFFAFA);
  }

  #content {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
  }

  #logo {
    margin-top: 30%;
    width: 100%;
    height: 30%;
    display: inline-block;
    text-align: center;
  }

  #logo img {
    width: 50%;
    height: 100%;
  }

  #input {
    margin-top: 5%;
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 20%;
  }

  input {
    font-family: 仿宋;
    font-weight: bolder;
    font-size: 15px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: black;
    background-color: transparent;
    margin-top: 2%;
    width: 70%;
    height: 35%;
  }

  input:focus {
    outline: none;
  }

  .login {
    margin-top: 5%;
    text-align: center;
  }

  span {
    padding: 2% 5% 2%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 25px;
  }

</style>
