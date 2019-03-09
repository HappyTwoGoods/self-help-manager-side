<template>
  <div id="max">
    <div id="background"></div>
    <div id="content">
      <div id="logo">
        <img src="../../assets/image/logo.jpg"/>
      </div>
      <div class="menu" @click="getAccount()">账号信息</div>
      <div class="menu" @click="getOrderAll()">所有订单</div>
      <div class="menu" @click="getMenu()">所有菜单</div>
      <div class="menu" @click="getLoginOut()">退出登录</div>
    </div>
  </div>

</template>

<script>
  import {service} from "../../js/api";

  export default {
    name: "my",
    data() {
      return {}
    },
    methods: {
      getAccount() {
        window.location.href = "/accountInfo"
      },
      getOrderAll() {
        window.location.href = "/allOrder"
      },
      getMenu() {
        window.location.href = "/allMenu"
      },
      getLoginOut() {
        service("get", "/cook/loginOut", {}).then(
          data => {
            if (data === undefined) {
              return
            }
            alert(data.message)
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
  }

  #background {
    position: fixed;
    z-index: 2;
    background: linear-gradient(45deg, #FFFAFA, #FFE4B5);
    width: 100%;
    height: 100%;
  }

  #content {
    position: fixed;
    z-index: 999;
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

  .menu {
    margin: 0% 20% 0%;
    font-family: 仿宋;
    font-size: 18px;
    display: inline-block;
    line-height: 50px;
    text-align: center;
    width: 60%;
    height: 50px;
    border-bottom: 1px black solid;
  }

</style>
