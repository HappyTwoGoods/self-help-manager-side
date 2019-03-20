<template>
  <div id="max">
    <div id="background">
    </div>
    <div id="content">
      <div id="head">
        <div id="input">
          <div class="input">
            <input type="text" v-model="cookName" placeholder="请输入姓名" @blur="getCook"/>查询</div>
          <div class="input">
            <span @click="getAdd">新增</span></div>
          <div class="input">
            <select v-model="status" @change="getCook">
              <option value="">全部</option>
              <option value="1">工作中</option>
              <option value="0">休息中</option>
            </select></div>
        </div>
        <table cellspacing="0px">
          <tr>
            <td class="aa">姓名</td>
            <td class="aaa">手机号</td>
            <td class="aa">用户名</td>
            <td class="aa">状态</td>
            <td class="a">操作</td>
          </tr>
        </table>
      </div>
      <div id="cook">
        <table cellspacing="0px">
          <tr v-for="item in list">
            <td class="aa">{{item.cookName}}</td>
            <td class="aaa">{{item.telephone}}</td>
            <td class="aa">{{item.nickname}}</td>
            <td class="aa" v-show="item.cookStatus===1">工作</td>
            <td class="aa" v-show="item.cookStatus===0">休息</td>
            <td class="a"><span @click="deleteCook(item.id)">删除</span></td>
          </tr>
        </table>
        <div id="bottomDiv"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {service} from "../../js/api";

  export default {
    name: "Cook",
    data() {
      return {
        list: null,
        cookName: null,
        status: ""
      }
    },
    mounted() {
      this.getCook()
    },
    methods: {
      getCook() {
        service("get", "/manager/query/CookInfo", {name: this.cookName, status: this.status}).then(data => {
          if (data.code !== 200) {
            alert(data.message)
          }
          if (data.code === 200) {
            this.list = data.data
          }
        })
      },
      getAdd() {
        this.$router.push({path:"/addCook"})
      },
      deleteCook(id) {
        if (confirm("确认删除吗？")) {
          service("get", "/manager/delete/cookInfo", {
            cookId: id
          }).then(
            data => {
              if (data.code !== 200) {
                alert(data.message)
              }
              if (data.code === 200) {
                alert("删除成功！")
              }
            }
          )
        }
      }
    }
  }
</script>

<style scoped>
  #max {
    width: 100%;
    height: 100%;
    bottom: 50px;
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
    height: 80px;
    width: 100%;
  }

  .input {
    display: inline-block;
    float: left;
    width: 33%;
  }

  #input {
    width: 100%;
    display: inline-block;
    line-height: 50px;
    text-align: center;
  }

  .input span {
    border-radius: 25px;
    background-color: crimson;
    padding: 5% 10%;
  }

  input {
    margin-left: 5%;
    width:65px;
    background: transparent;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 0.5px black solid;
  }

  input:focus {
    outline: none;
  }

  select {
    background: transparent;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 0.5px black solid;
    margin-right: 0;
  }

  select:focus {
    outline: none;
  }

  #cook {
    padding-top: 80px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  table {
    font-family: 仿宋;
    margin-left: 5%;
    font-size: 15px;
    width: 90%;
  }

  #cook tr {
    height: 40px;
  }

  #cook td {
    border-bottom: 0.5px black solid;
  }

  td span {
    border-radius: 15px;
    background-color: darkgrey;
  }

  #bottomDiv {
    height: 150px;
  }

  .a {
    width: 12%;
  }

  .aa {
    width: 17%;
  }

  .aaa {
    width: 37%;
  }
</style>
