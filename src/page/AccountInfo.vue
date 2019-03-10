<template>
  <div id="max">
    <div id="background"></div>
    <div id="content">
      <div id="logo">
        <img src="../assets/image/logo.jpg"/>
      </div>
      <div>
        姓名:<input type="text" class="info" v-model="username" disabled/><br/>
        电话:<input type="text" class="info" v-model="telephone" disabled/><br/>
        昵称:<input type="text" class="info" v-model="nickname" disabled/><br/>
        密码:<input type="password" class="info" v-model="password" disabled/><br/>
        <input type="button" @click="changeValue()" value="修改"/><br/>
      </div>
    </div>
  </div>

</template>

<script>
  import {service} from "../js/api";

  export default {
    name: "AccountInfo",
    data() {
      return {
        username: 'username',
        telephone: '11111111111',
        nickname: '小米',
        password: 'password'
      }
    },
    mounted() {
      this.getInfo()
    },
    methods: {
      getInfo() {
        service("get", "/cook/selectCookById", {}).then(
          data => {
            if (data === undefined) {
              return
            }
            if (data.code !== 200) {
              alert(data.message())
              return
            }
            if (data.code === 200) {
              this.username = data.data.cookName
              this.telephone = data.data.telephone
              this.nickname = data.data.nickname
              this.password = data.data.cookPassword
            }
          }
        )
      },
      changeValue() {
        service("post","/cook/update/cookInfo", {
          cookName: this.username, telephone: this.telephone,
          nickname: this.nickname, cookPassword: this.password
        }).then(
          data => {
            if (data === undefined) {
              return
            }
            alert(data.message)
          })
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

  input {
    height: 45px;
    width: 60%;
    margin-top: 2%;
    background-color: transparent;
    border: 1px black solid;
  }

  input[type="button"] {
    margin-top: 5%;
    height: 30px;
    width: 50px;
  }

</style>
